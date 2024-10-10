import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlaylistsActions } from './playlists.actions';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsFacade {
  private store = inject(Store);

  loadPlaylists(): void {
    this.store.dispatch(PlaylistsActions.loadPlaylists());
  }
}
