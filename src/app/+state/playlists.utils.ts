import { FeaturedPlaylistsApiResult, Playlist } from './playlists.model';

export function adaptPlaylistsApiResult(
  apiResult: FeaturedPlaylistsApiResult
): Playlist[] {
  return apiResult.content.map(
    ({ id, name, url, curator_name: curator, artwork: imgSrc }) => ({
      id: id.replace(/^pl./, ''),
      name,
      url,
      curator,
      imgSrc,
    })
  );
}
