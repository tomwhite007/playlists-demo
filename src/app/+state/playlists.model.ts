export interface Playlist {
  id: string;
  name: string;
  url: string;
  curator: string;
  imgSrc: string;
}

export interface FeaturedPlaylistsApiResult {
  name: string;
  content: {
    id: string;
    kind: string;
    name: string;
    url: string;
    curator_name: string;
    artwork: string;
  }[];
}
