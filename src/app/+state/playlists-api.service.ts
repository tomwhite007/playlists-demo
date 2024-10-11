import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeaturedPlaylistsApiResult } from './playlists.model';

export const FEATURED_PLAYLISTS_API_URL = '/api/featured-playlists.json';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsApiService {
  http = inject(HttpClient);

  getPlaylists(): Observable<FeaturedPlaylistsApiResult> {
    return this.http.get<FeaturedPlaylistsApiResult>(
      FEATURED_PLAYLISTS_API_URL
    );
  }
}
