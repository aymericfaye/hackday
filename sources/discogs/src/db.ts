import * as mongoose from 'mongoose'

(mongoose as any).Promise = global.Promise

const WESTAGE_HOST = 'localhost:27017'
const WESTAGE_DB = 'westage'
const WESTAGE_USER = ''
const WESTAGE_PWD = ''

const AliasSchema = new mongoose.Schema({
  resource_url: String,
  id: Number,
  name: String
})

const MemberSchema = new mongoose.Schema({
  active: Boolean,
  resource_url: String,
  id: Number,
  name: String
})

const UserDataSchema = new mongoose.Schema({
  profile: String,
  releases_url: String,
  name: String,
  uri: String,
  members: [ MemberSchema ],
  urls: [ String ],
  resource_url: String,
  aliases: [ AliasSchema ],
  id: Number,
  data_quality: String,
  namevariations: [ String ]
})

const ReleaseSchema = new mongoose.Schema({
  id: Number,
  type: String,
  artist: String,
  resource_url: String,
  trackinfo: String,
  year: Number,
  role: String,
  label: String,
  title: String,
  format: String,
  thumb: String,
  status: String
})

const ArtistSchema = new mongoose.Schema({
  artistName: String,
  artistData: { userData: UserDataSchema, releases: [ ReleaseSchema ] },
  searchTerm: String,
  source: String,
  extId: String,
  date: { type : Date, default : Date.now }
})

export const ArtistModel = mongoose.model('discogs', ArtistSchema)
export const ReleaseModel = mongoose.model('release', ReleaseSchema)

export function DBConnect() {
  mongoose.connect('mongodb://' + WESTAGE_USER + ':'+ WESTAGE_PWD + '@'+ WESTAGE_HOST + '/'+ WESTAGE_DB, function(err) {
    if (err) { throw err }
  })
}

export function DBClose() {
  mongoose.connection.close()
}
