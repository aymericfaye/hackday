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
       + option('per_page', '20')
}

function SearchArtist(searchTerm: string) {
  const accessParam = 'key='+ DISCOGS_ACCESS_KEY +'&secret='+ DISCOGS_ACCESS_SECRET
  const url = 'https://api.discogs.com/database/search?q='+ searchTerm + '&' + accessParam + SearchOptions()

  return SearchDiscogsHTTP(url).then(artists => {
    Promise.all(artists.map(artist => {
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
// Promise.all(searchTerms.map(SearchArtist))

DBConnect()
SearchArtist('Mild High Club')
