import * as immutable from 'immutable'
import fetch from 'node-fetch'
import * as mongoose from 'mongoose'

import { ArtistModel, ReleaseModel, DBConnect, DBClose } from './db'
import { UsersResult, DiscogsResult } from './models'

const DISCOGS_ACCESS_KEY = 'JNmoljCnFZGAqLwkiDoY'
const DISCOGS_ACCESS_SECRET = 'TbvVlZIHvXOTorUwkqGZSpZLwHvlzYyF'

function SearchDiscogsHTTP(url: string): Promise<Array<UsersResult>> {
  function SearchRec(url: string, nb_pages: number, usersResults: Array<UsersResult>) {
    return fetch(url).then(response => {
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
          // Fetch the next page here if needed
          return usersResults
        })
      } else {
        return usersResults
      }
    })
  }
  return SearchRec(url, 0, [])
}

function SearchOptions() {
  const option = (key: string, value: string) => '&' + key + '=' + value

  return option('type', 'artist')
       + option('per_page', '1')
}

function SearchArtist(searchTerm: string) {
  const accessParam = '&key='+ DISCOGS_ACCESS_KEY +'&secret='+ DISCOGS_ACCESS_SECRET
  const url = 'https://api.discogs.com/database/search?q='+ searchTerm + accessParam + SearchOptions()

  return SearchDiscogsHTTP(url).then(artists => {
    for (let artist of artists) {
      const apiArtistUrl = 'https://api.discogs.com/artists/'+ artist.id + '?' + accessParam
      return fetch(apiArtistUrl).then(userDataResponse => {
        return userDataResponse.json().then(userData => {
          const apiArtistUrl = 'https://api.discogs.com/artists/'+ artist.id +'/releases?' + accessParam
          return fetch(apiArtistUrl).then(releasesDataResponse => {
            return releasesDataResponse.json().then(releasesData => {
              const monArtiste = new ArtistModel({
                artistName: artist.name,
                searchTerm: searchTerm,
                artistData: { userData: userData, releases: releasesData.releases },
                source: 'discogs',
                extId: artist.id
              })

              return monArtiste.save(err => {
                if (err) {
                  console.log(err.message)
                } else {
                  console.log(artist.name + ' ajouté avec succès !')
                }
              })
            })
          })
        })
      })
    }
  })
}

const searchTerms = [
  'radiohead',
  'sigur ros'
]

DBConnect()
Promise.all(searchTerms.map(SearchArtist)).then().catch().then(() => DBClose()) // Should be 'finally'

//SearchArtist('radiohead')

// DBConnect()
// Promise.all([SearchArtist('radiohead'), SearchArtist('sigur ros')]).then().catch().then(() => DBClose()) // Should be 'finally'
