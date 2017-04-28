import * as immutable from 'immutable'
import fetch from 'node-fetch'
import * as mongoose from 'mongoose'

import { ArtistModel, DBConnect, DBClose } from './db'
import { UsersResult } from './models'

const SOUNDCLOUD_ACCESS_TOKEN = '0a470e03d5591f2bbd87aea2b6831308';

function SearchSoundcloudHTTP(url: string, max_pages: number): Promise<Array<UsersResult>> {
  function searchRec(url: string, currentPage: number, usersResults: Array<UsersResult>) {
    return fetch(url).then(response => {
      var contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf("application/json") !== 1) {
        return response.json().then(users => {
          const nextPage = currentPage + 1;
          for (let user of users.collection) {
            usersResults.push({
              id: user.id,
              name: user.username,
              data: user
            });
          }
          if (users.next_href != null && currentPage < max_pages) {
            return searchRec(users.next_href, nextPage, usersResults);
          } else {
            return usersResults;
          }
        })
      } else {
        return usersResults;
      }
    });
  }
  return searchRec(url, 0, []);
}

function SearchOptions() {
  var result = ''
  const options = {
    city: 'Paris',
    //track_count : {from : 1},
    //followers_count : {from : 1000},
    limit: 50,
    linked_partitioning: 1
  };

  for (let key in options){
    if (options.hasOwnProperty(key))
      result += '&' + key + '=' + options[key]
  }
  return result
}

function SearchArtist(searchTerm: string) {
  var url = 'https://api.soundcloud.com/users?q=' + searchTerm + '&format=json&client_id=' + SOUNDCLOUD_ACCESS_TOKEN + SearchOptions()

  return SearchSoundcloudHTTP(url, 4).then(artists => {
    return Promise.all(artists.map(artist => {
      var userDataUrl = 'https://api.soundcloud.com/users/' + artist.id + '?format=json&client_id=' + SOUNDCLOUD_ACCESS_TOKEN
      return fetch(userDataUrl).then(userDataResponse => {
        return userDataResponse.json().then(userData => {
          var profilesUrl = 'https://api.soundcloud.com/users/' + artist.id + '/web-profiles?format=json&client_id=' + SOUNDCLOUD_ACCESS_TOKEN
          return fetch(profilesUrl).then(profilesResponse => {
            return profilesResponse.json().then(profiles => {
              const monArtiste = new ArtistModel({
                artistName: artist.name,
                searchTerm: searchTerm,
                artistData: { userData: userData, webProfiles: profiles },
                source: 'soundcloud',
                extId: artist.id
              })

              //console.log({ userData: userData, webProfiles: profiles });

              return monArtiste.save(function (err) {
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
    }))
  })
}

const searchTerms = [
  'Radiohead','Noir Desir','Joy Division','Manu Le Malin','Jenifer Cardini','Grand Blanc',
  '3SOMESISTERS','Agar Agar','Pegase','Killason','La fine equipe','Jules','La Canaille',
  'Clara Luciani','Emae','Brisa Roche','Lea Paci','Ornette','Asgeir','Nina Johansson',
  'Angie Robba','Mafia Spartiate','Burning peacocks','Temples of Youth','Phoenix',
  'Klyne','The Black Lips','JVNE','Vince Staples','Actress','The XX','Zerolex',
  'Bastien Keb','POW !','Sentiments','Ponty Mython','Chloe','Maceo Plex','Etienne de Crecy',
  'Franck Ocean','Adult','Austra','Dirty Projectors','Douchka','Marcel Lune','DBFC',
  'Rendez-vous','FAIRE','OnNZE Onze','Paco Tyson','H-Burns','Sameer Ahmad','Georgia','Mild High Club'
]

const searchTerms1 = [
  'Radiohead','Noir Désir','Joy Division','Manu Le Malin','Jenifer Cardini','Grand Blanc'
]

const searchTerms2 = [
  '3SOMESISTERS','Agar Agar','Pegase','Killason','La fine équipe','Jules','La Canaille'
]

const searchTerms3 = [
  'Clara Luciani','Emaé','Brisa Roché','Lea Paci','Ornette','Asgeir','Nina Johansson'
]

const searchTerms4 = [
  'Angie Robba','Mafia Spartiate','Burning peacocks','Temples of Youth','Phoenix'
]

const searchTerms5 = [
  'Klyne','The Black Lips','JVNE','Vince Staples','Actress','The XX','Zerolex'
]

const searchTerms6 = [
  'Bastien Keb','POW !','Sentiments','Ponty Mython','Chloé','Maceo Plex','Etienne de Crecy'
]

const searchTerms7 = [
  'Franck Ocean','Adult','Austra','Dirty Projectors','Douchka','Marcel Lune','DBFC'
]

const searchTerms8 = [
  'Rendez-vous','FAIRE','OnNZE Onze','Paco Tyson','H-Burns','Sameer Ahmad','Georgia','Mild High Club'
]

// DBConnect()
// Promise.all(searchTerms.map(SearchArtist)).then().catch().then(DBClose)

DBConnect()
SearchArtist('Radiohead').then().catch().then(DBClose)
