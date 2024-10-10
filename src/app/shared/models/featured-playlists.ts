export interface FeaturedPlaylists {
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
