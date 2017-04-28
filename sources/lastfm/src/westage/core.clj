(ns westage.core
  (:require [clojure.pprint :refer [pp pprint]]
            [clj-http.client :as client]
            [monger.core :as mg]
            [monger.collection :as mc]
            [slingshot.slingshot :refer [try+]])
  (:import [org.apache.commons.lang3 StringUtils]
           [java.text Normalizer]))

#_(defn with-retry [fetch-fn]
  (loop [{:keys [status body] :as resp} (fetch-fn)]
    (if (= 200 status)
      body
      (do
        (prn "error")
        (prn resp)
        (Thread/sleep 5000)
        (recur (fetch-fn))))))

(comment

;;youtube

(pprint (client/get "https://www.googleapis.com/youtube/v3/channels"
                    {:query-params {:part "contentDetails"
                                    :forUsername "OneDirectionVEVO"
                                    :key "AIzaSyD8KRN3UTAw9-6HZOOoPPDQI3k3BS4n72E"}
                     :as :json}))

(pprint (client/get "https://www.googleapis.com/youtube/v3/list"
                    {:query-params {:part "contentDetails"
                                    :forUsername "OneDirectionVEVO"
                                    :key "AIzaSyD8KRN3UTAw9-6HZOOoPPDQI3k3BS4n72E"}
                     :as :json}))

;; lastfm

(pprint (client/get "http://ws.audioscrobbler.com/2.0/"
                    {:query-params {:method "artist.search"
                                    :artist "Clara Luciani"
                                    :api_key "b893f9820c946a6cdd7a93fdbb4d8707"
                                    :format "json"}
                     :as :json}))

(pprint (client/get "http://ws.audioscrobbler.com/2.0/"
                    {:query-params {:method "artist.getInfo"
                                    :artist "Clara luciani"
                                    :autocorrect 1
                                    :api_key "b893f9820c946a6cdd7a93fdbb4d8707"
                                    :format "json"}
                     :as :json}))

(pprint (client/get "http://ws.audioscrobbler.com/2.0/"
                    {:query-params {:method "user.getInfo"
                                    :user "Richard Jones"
                                    :api_key "b893f9820c946a6cdd7a93fdbb4d8707"
                                    :format "json"}
                     :as :json}))

{:request-time 676,
 :repeatable? false,
 :protocol-version {:name "HTTP", :major 1, :minor 1},
 :streaming? true,
 :chunked? false,
 :reason-phrase "OK",
 :headers
 {"Server" "openresty/1.9.7.3",
  "Date" "Thu, 27 Apr 2017 10:38:47 GMT",
  "Content-Type" "application/json; charset=UTF-8",
  "Content-Length" "1090",
  "Connection" "keep-alive",
  "Access-Control-Request-Headers"
  "Origin, X-Atmosphere-tracking-id, X-Atmosphere-Framework, X-Cache-Date, Content-Type, X-Atmosphere-Transport, *",
  "Access-Control-Allow-Methods" "POST, GET, OPTIONS",
  "Access-Control-Allow-Origin" "*",
  "Access-Control-Max-Age" "86400"},
 :orig-content-encoding nil,
 :status 200,
 :length 1090,
 :body
 {:artist
  {:tags {:tag []},
   :streamable "0",
   :name "Clara luciani",
   :similar {:artist []},
   :bio
   {:links
    {:link
     {:#text "",
      :rel "original",
      :href "https://last.fm/music/Clara+luciani/+wiki"}},
    :published "01 Jan 1970, 00:00",
    :summary
    " <a href=\"https://www.last.fm/music/Clara+luciani\">Read more on Last.fm</a>",
    :content ""},
   :url "https://www.last.fm/music/Clara+luciani",
   :image
   [{:#text
     "https://lastfm-img2.akamaized.net/i/u/34s/75208b91ef63932acefa27398ab59355.png",
     :size "small"}
    {:#text
     "https://lastfm-img2.akamaized.net/i/u/64s/75208b91ef63932acefa27398ab59355.png",
     :size "medium"}
    {:#text
     "https://lastfm-img2.akamaized.net/i/u/174s/75208b91ef63932acefa27398ab59355.png",
     :size "large"}
    {:#text
     "https://lastfm-img2.akamaized.net/i/u/300x300/75208b91ef63932acefa27398ab59355.png",
     :size "extralarge"}
    {:#text
     "https://lastfm-img2.akamaized.net/i/u/75208b91ef63932acefa27398ab59355.png",
     :size "mega"}
    {:#text
     "https://lastfm-img2.akamaized.net/i/u/arQ/75208b91ef63932acefa27398ab59355.png",
     :size ""}],
   :stats {:listeners "295", :playcount "698"},
   :ontour "0"}},
 :trace-redirects []}

(pprint (client/get "http://ws.audioscrobbler.com/2.0/"
                    {:query-params {:method "artist.getTopAlbums"
                                    :artist "Clara luciani"
                                    :autocorrect 1
                                    :api_key "b893f9820c946a6cdd7a93fdbb4d8707"
                                    :format "json"}
                     :as :json}))

{:name "Pleure Clara, pleure",
 :playcount 370,
 :url
 "https://www.last.fm/music/Clara+luciani/Pleure+Clara,+pleure",
 :artist
 {:name "Clara luciani",
  :url "https://www.last.fm/music/Clara+luciani"},
 :image
 [{:#text
   "https://lastfm-img2.akamaized.net/i/u/34s/c067dfbcb7783b05faefa48fe19c0b09.png",
   :size "small"}
  {:#text
   "https://lastfm-img2.akamaized.net/i/u/64s/c067dfbcb7783b05faefa48fe19c0b09.png",
   :size "medium"}
  {:#text
   "https://lastfm-img2.akamaized.net/i/u/174s/c067dfbcb7783b05faefa48fe19c0b09.png",
   :size "large"}
  {:#text
   "https://lastfm-img2.akamaized.net/i/u/300x300/c067dfbcb7783b05faefa48fe19c0b09.png",
   :size "extralarge"}]}

(pprint (client/get "http://ws.audioscrobbler.com/2.0/"
                    {:query-params {:method "artist.getTopTracks"
                                    :artist "Clara luciani"
                                    :autocorrect 1
                                    :api_key "b893f9820c946a6cdd7a93fdbb4d8707"
                                    :format "json"}
                     :as :json}))

{:name "Pleure Clara, pleure",
 :playcount "426",
 :listeners "207",
 :url
 "https://www.last.fm/music/Clara+luciani/_/Pleure+Clara,+pleure",
 :streamable "0",
 :artist
 {:name "Clara luciani",
  :url "https://www.last.fm/music/Clara+luciani"},
 :image
 [{:#text
   "https://lastfm-img2.akamaized.net/i/u/34s/75208b91ef63932acefa27398ab59355.png",
   :size "small"}
  {:#text
   "https://lastfm-img2.akamaized.net/i/u/64s/75208b91ef63932acefa27398ab59355.png",
   :size "medium"}
  {:#text
   "https://lastfm-img2.akamaized.net/i/u/174s/75208b91ef63932acefa27398ab59355.png",
   :size "large"}
  {:#text
   "https://lastfm-img2.akamaized.net/i/u/300x300/75208b91ef63932acefa27398ab59355.png",
   :size "extralarge"}],
 :attr {:rank "1"}}

)

(defn lazy-cat* [colls]
  (lazy-seq
   (when (seq colls)
     (concat (first colls) (lazy-cat* (next colls))))))

(defn lastfm-artists-search* [artist-name page]
  (client/get "http://ws.audioscrobbler.com/2.0/"
              {:query-params {:method "artist.search"
                              :artist artist-name
                              :page page
                              :limit 30
                              :api_key "b893f9820c946a6cdd7a93fdbb4d8707"
                              :format "json"}
               :as :json}))

(defn lastfm-artists-search [artist-name page]
  (try+ (let [resp (lastfm-artists-search* artist-name page)]
          (-> resp :body :results :artistmatches :artist))
        (catch Object _ [])))

(defn lastfm-all-artists-search [artist-name]
  (-> (take-while seq (map lastfm-artists-search (repeat artist-name) (map inc (range))))
      lazy-cat*))

(defn lastfm-artist* [name]
  (client/get "http://ws.audioscrobbler.com/2.0/"
              {:query-params {:method "artist.getInfo"
                              :artist name
                              :autocorrect 1
                              :api_key "b893f9820c946a6cdd7a93fdbb4d8707"
                              :format "json"}
               :as :json}))

(defn lastfm-artist [{:keys [name]}]
  (try+ (let [resp (lastfm-artist* name)]
          (-> resp :body :artist))
        (catch Object _ [])))

(defn lastfm-albums-search* [name page]
  (client/get "http://ws.audioscrobbler.com/2.0/"
              {:query-params {:method "artist.getTopAlbums"
                              :artist name
                              :autocorrect 1
                              :page page
                              :api_key "b893f9820c946a6cdd7a93fdbb4d8707"
                              :format "json"}
               :as :json}))

(defn lastfm-albums-search [name page]
  (try+ (let [resp (lastfm-albums-search* name page)]
          (-> resp :body :topalbums :album))
        (catch Object _ [])))

(defn lastfm-all-albums-search [{:keys [name]}]
  (-> (take-while seq (map lastfm-albums-search (repeat name) (map inc (range))))
      lazy-cat*))

(defn artist-with-albums [artist]
  (assoc artist :albums (lastfm-all-albums-search artist)))

(defn lastfm-tracks-search* [name page]
  (client/get "http://ws.audioscrobbler.com/2.0/"
              {:query-params {:method "artist.getTopTracks"
                              :artist name
                              :autocorrect 1
                              :page page
                              :api_key "b893f9820c946a6cdd7a93fdbb4d8707"
                              :format "json"}
               :as :json}))

(defn lastfm-tracks-search [name page]
  (try+ (let [resp  (lastfm-tracks-search* name page)]
          (-> resp :body :toptracks :track))
        (catch Object _
          [])))

(defn lastfm-all-tracks-search [{:keys [name]}]
  (-> (take-while seq (map lastfm-tracks-search (repeat name) (map inc (range))))
      lazy-cat*))

(defn artist-with-tracks [artist]
  (assoc artist :tracks (lastfm-all-tracks-search artist)))

(defn lastfm-fetch-all [artist-name]
  (->> (lastfm-all-artists-search artist-name)
       (map lastfm-artist)
       (map artist-with-albums)
       (map artist-with-tracks)))

(comment

  (first (map lastfm-artist (lastfm-all-artists-search "Radio head")))
  (->> (lastfm-all-artists-search "Clara Luciani")
       (map lastfm-artist)
       (map artist-with-albums)
       (map artist-with-tracks)
       first)
  
  (count (lastfm-all-artists-search "Clara Luciani"))
  (count (lastfm-all-artists-search "Emaé"))
  (count (lastfm-all-artists-search "Ornette"))
  (nth (lastfm-all-artists-search "Ornette") 3)
  )

(def lastfm-artists-names
  #{"La fine equipe" "Killason" "Pegase" "Agar Agar" "3SOMESISTERS" "Grand Blanc"
    "Jenifer Cardini" "Manu le malin" "Clara Luciani" "Emaé" "Brisa Roché" "Lea Paci"
    "Ornette" "Asgeir" "Nina Johansson" "Angie Robba" "Mafia Spartiate" "Burning peacocks"
    "Temples of Youth" "Phoenix" "L’age d’or" "Klyne" "The Black Lips" "JVNE" "Vince Staples"
    "Actress" "The XX" "Zerolex" "Mad Rey" "Sonic Jesus" "Mount Kimbie" "James Darle" "Hord"
    "Bastien Keb" "POW !" "Sentiments" "Ponty Mython" "Chloé" "Maceo Plex"
    "Etienne de Crecy" "Franck Ocean" "Adult" "Austra" "Dirty Projectors" "Douchka"
    "Marcel Lune" "DBFC" "Rendez-vous" "FAIRE" "ONZE Onze" "Paco Tyson" "H-Burns"
    "Sameer Ahmad" "Georgia" "Mild High Club"})


;; api key b893f9820c946a6cdd7a93fdbb4d8707
;; shared secret 0237cfecd4af0414f2a5e5fa2e4858bd



;; Spotify

#_(pprint (client/get "https://api.spotify.com/v1/search"
                    {:query-params {:method "user.getInfo"
                                    :user "Radio head"
                                    :api_key "b893f9820c946a6cdd7a93fdbb4d8707"
                                    :format "json"}
                     :as :json}))


;; mongo

(comment
  (def conn (mg/connect))
  (def db (mg/get-db conn "westage"))
  (mg/disconnect conn)

  (def lastfm-future
    (future
      (doseq [artist-name lastfm-artists-names]
        (doseq [artist (take 0 (lastfm-fetch-all artist-name))]
          (mc/update db "lastfm" (select-keys artist [:name]) artist {:upsert true})))))

  (doseq [artist (lastfm-fetch-all "Clara Luciani")]
    (mc/update db "lastfm" (select-keys artist [:name]) artist {:upsert true}))

  (future-cancel lastfm-future)
  )


;; matching

(defn normalize-string [str]
  "Remove accent from string"
  (let [normalized (.toUpperCase str)
        normalized (java.text.Normalizer/normalize normalized java.text.Normalizer$Form/NFD)]
    (clojure.string/replace normalized #"\p{InCombiningDiacriticalMarks}+" "")))

(defn match-strings? [s1 s2]
  (let [s1 (normalize-string s1)
        s2 (normalize-string s2)]
    (cond (= 0 (count s1) (count s2))
          true
          (.contains s1 s2)
          true
          (.contains s2 s1)
          true
          :else
          (let [l (min (count s1) (count s2))
                offset (/ (* l 20) 100)]
            (if (<= (StringUtils/getLevenshteinDistance s1 s2) offset)
              true false)))))

(defn search-by-name-soundclouds [{:keys [name] :as artist} name-key]
  (let [potential-artists (mc/find-maps db "soundclouds" {"$text" {"$search" name}})]
    (->> potential-artists
         (filter #(match-strings? name (get % name-key)))
         first)))

(defn search-by-name-discogs [{:keys [name] :as artist} name-key]
  (let [potential-artists (mc/find-maps db "discogs" {"$text" {"$search" name}})]
    (->> potential-artists
         (filter #(match-strings? name (get % name-key)))
         (filter #(match-albums-tracks? (:albums artist)
                                        (:tracks artist)
                                        (-> % :artistData :releases)))
         first)))

(comment
  (match-strings? "efgdsjde" "efgdsj dé")

  (normalize-string "é fdssSSS*'$$")
  (StringUtils/getLevenshteinDistance "E" "e")
  
  (let [lastfm-artists (mc/find-maps db "lastfm")]
    (doseq [{:keys [name] :as lastfm-artist} lastfm-artists]
      (when name
        (let [discogs-artist (search-by-name-discogs lastfm-artist :artistName)
              soundclouds-artist (search-by-name-soundclouds lastfm-artist :artistName)]
          (when (and discogs-artist soundclouds-artist)
            (mc/insert db "matched" {:lastfm (dissoc lastfm-artist :_id)
                                     :discogs (dissoc discogs-artist :_id)
                                     :soundcouds (dissoc soundclouds-artist :_id)
                                     :common {:name name}}))))))

  (mc/find-one-as-map db "lastfm" {"$text" {"$search" "Radiohead"}})
  )

(defn match-albums-tracks? [lastfm-albums lastfm-tracks discogs-releases]
  (let [matches? (volatile! false)]
    (loop [[{:keys [name] :as album} & albums] lastfm-albums]
      (when album
        (loop [[{:keys [trackinfo title] :as release} & releases] discogs-releases]
          (when release
            (if (and
                 trackinfo title name
                 (or (match-strings? name trackinfo) (match-strings? name title)))
              (vreset! matches? true)
              (recur releases))))
        (when-not @matches?
          (recur albums))))
    (when-not @matches?
      (loop [[{:keys [name] :as track} & tracks] lastfm-tracks]
        (when track
          (loop [[{:keys [trackinfo title] :as release} & releases] discogs-releases]
            (when release
              (if (and
                   trackinfo title name
                   (or (match-strings? name trackinfo) (match-strings? name title)))
                (vreset! matches? true)
                (recur releases))))
          (when-not @matches?
            (recur tracks)))))
    @matches?))

;; name

;; trackinfo
;; title
