import * as mongoose from 'mongoose'

(mongoose as any).Promise = global.Promise

const WESTAGE_HOST = 'localhost:27017'
const WESTAGE_DB = 'westage'
const WESTAGE_USER = ''
const WESTAGE_PWD = ''

const UserDataSchema = new mongoose.Schema({
  id: Number,
  kind: String,
  permalink: String,
  username: String,
  last_modified: String,
  uri: String,
  permalink_url: String,
  avatar_url: String,
  country: String,
  first_name: String,
  last_name: String,
  full_name: String,
  description: String,
  city: String,
  discogs_name: String,
  myspace_name: String,
  website: String,
  website_title: String,
  track_count: Number,
  playlist_count: Number,
  online: Boolean,
  plan: String,
  followers_count: Number,
  followings_count: Number,
  public_favorites_count: Number,
  reposts_count: Number
})

const WebProfileSchema = new mongoose.Schema({
  kind: String,
  id: Number,
  service: String,
  title: String,
  url: String,
  username: String,
  created_at: String
})

const ArtistSchema = new mongoose.Schema({
  artistName: String,
  artistData: { userData: UserDataSchema, webProfiles: [ WebProfileSchema ] },
  searchTerm: String,
  source: String,
  extId: String,
  date: { type : Date, default : Date.now }
})

export const ArtistModel = mongoose.model('soundcloud', ArtistSchema)

export function DBConnect() {
  mongoose.connect('mongodb://' + WESTAGE_USER + ':'+ WESTAGE_PWD + '@'+ WESTAGE_HOST + '/'+ WESTAGE_DB, function(err) {
    if (err) { throw err }
  })
}

export function DBClose() {
  mongoose.connection.close()
}
