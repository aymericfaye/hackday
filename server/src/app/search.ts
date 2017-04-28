import * as mongoose from 'mongoose'

(mongoose as any).Promise = global.Promise

const WESTAGE_HOST = 'localhost:27017'
const WESTAGE_DB = 'westage'
const WESTAGE_USER = ''
const WESTAGE_PWD = ''

interface Artist {
  common: {
    name: string
  }
  lastfm: any
  discogs: any
}

const ArtistSchema = new mongoose.Schema({
  common: {
    name: String
  }
})

const ArtistModel = mongoose.model('artist', ArtistSchema, 'matched')

export function DBConnect() {
  mongoose.connect('mongodb://' + WESTAGE_USER + ':'+ WESTAGE_PWD + '@'+ WESTAGE_HOST + '/'+ WESTAGE_DB, function(err) {
    if (err) { throw err }
  })
}

export function DBClose() {
  mongoose.connection.close()
}

DBConnect()

export function search(artistName: string): any {
  return ArtistModel.find({ 'common.name': artistName }, 'common lastfm discogs', (err, artist) => {
    return artist
  })
}
