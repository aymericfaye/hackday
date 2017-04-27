import * as immutable from 'immutable'
import fetch from 'node-fetch'
import * as mongoose from 'mongoose'

import * as conf from 'conf/app.conf'

(mongoose as any).Promise = global.Promise

function WestageDBConnect() {
  mongoose.connect('mongodb://' + conf.WESTAGE_USER + ':'+ conf.WESTAGE_PWD + '@'+ conf.WESTAGE_HOST + '/'+ conf.WESTAGE_DB, function(err) {
    if (err) { throw err }
  })
}

function WestageDBDisconnect() {
  mongoose.connection.close()
}

function searchSoundcloudHTTP(url: string, max_pages: number) {
  function searchRec(url: string, nb_pages: number, usersResults) {
    return fetch(url).then(function (response) {
      var contentType = response.headers.get('content-type')
      if (contentType && contentType.indexOf("application/json") !== 1) {
        return response.json().then(function (users) {
          nb_pages++
          for (let user of users.collection) {
            usersResults.push({
              id: user.id,
              name: user.username,
              data: user
            })
          }
          if (users.next_href != null && nb_pages < max_pages) {
            return searchRec(users.next_href, nb_pages, usersResults)
          } else {
            return usersResults
          }
        })
      } else {
        return usersResults
      }
    });
  }
  return searchRec(url, 0, [])
}

function searchDiscogsHTTP(url){
  function searchRec(url, nb_pages, usersResults) {
    return fetch(url).then(function (response) {
      var contentType = response.headers.get('content-type')
      if (contentType && contentType.indexOf("application/json") !== 1) {
        return response.json().then(function (users) {
          nb_pages++
          for (let user of users.results) {
            usersResults.push({
              id: user.id,
              name: user.title,
              data: user
            })
          }
          return usersResults
        })
      } else {
        return usersResults
      }
    })
  }
  return searchRec(url, 0, [])
}

var artistSourceSchema = new mongoose.Schema({
  source : { type : String, match: /^[a-zA-Z0-9-_]+$/ },
  extId : String,
  data : String,
  date : { type : Date, default : Date.now }
})

var artistSchema = new mongoose.Schema({
  artistName : String,
  artistData : String,
  searchTerm : String,
  source : String,
  extId : String,
  date : { type : Date, default : Date.now }
})

var ArtistModel = mongoose.model('artist', artistSchema)
var searchTerm = 'radiohead'
var apiUrl = 'https://api.discogs.com/database/search?q='+ searchTerm +'&key='+ conf.DISCOGS_ACCESS_KEY +'&secret='+ conf.DISCOGS_ACCESS_SECRET

const options = {
  type : 'artist',
  per_page : '100'
}

for(let key in options){
  if(options.hasOwnProperty(key))
    apiUrl += '&' + key + '=' + options[key]
}

WestageDBConnect()

searchDiscogsHTTP(apiUrl).then(function(sc_users){
  for(let artist of sc_users){
    console.log(artist)
    var apiArtistUrl = 'https://api.discogs.com/artists/'+ artist.id +'?key='+ conf.DISCOGS_ACCESS_KEY +'&secret='+ conf.DISCOGS_ACCESS_SECRET
    fetch(apiArtistUrl).then(function(userDataResponse) {
      userDataResponse.json().then(function (userData) {
        var apiArtistUrl = 'https://api.discogs.com/artists/'+ artist.id +'/releases?key='+ conf.DISCOGS_ACCESS_KEY +'&secret='+ conf.DISCOGS_ACCESS_SECRET
        fetch(apiArtistUrl).then(function(releasesResponse) {
          releasesResponse.json().then(function (releases) {
            var artistData = artist.data
            artistData.userData = userData
            artistData.releases = releases
            var monArtiste = new ArtistModel({
              artistName : artist.name,
              searchTerm : searchTerm,
              artistExtSources : [{
                source : 'discogs',
                extId : artist.id,
                data : artistData
              }]
            })
            monArtiste.save(function (err) {
              if (err) {
                console.log( err.message)
              }else{
                console.log(artist.name + ' ajouté avec succès !')
              }
            })
          })
        })
      })
    })
  }
})
