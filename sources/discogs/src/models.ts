export interface UsersResult {
  id: string
  name: string
  data: any
}

export interface DiscogsResult {
  thumb: string
  title: string
  uri: string
  resource_url: string
  type: string
  id: number
  userData: {
    profile: string
    releases_url: string
    name: string
    uri: string
    resource_url: string
    id: number
    data_quality: string
  }
  releases: {
    pagination: {
      per_page: number
      items: number
      page: number
      urls: any
      pages: number
    }
    releases: Array<any>
  }
}

export interface DiscogsReleases {
  status: String,
  thumb: String,
  format: String,
  title: String,
  label: String,
  role: String,
  year: Number,
  resource_url: String,
  artist: String,
  type: String,
  id: Number
}
