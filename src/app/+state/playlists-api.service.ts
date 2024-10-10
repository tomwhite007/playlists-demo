import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsApiService {
  http = inject(HttpClient);

  getPlaylists() {
    return this.http.get('/api/featured-playlists.json');
  }
}
