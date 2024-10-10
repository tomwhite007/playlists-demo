import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeaturedPlaylistsApiResult } from './playlists.model';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsApiService {
  http = inject(HttpClient);

  getPlaylists(): Observable<FeaturedPlaylistsApiResult> {
    return this.http.get<FeaturedPlaylistsApiResult>(
      '/api/featured-playlists.json'
    );
  }
}
