import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlaylistsActions } from './playlists.actions';
import * as PlaylistsSelectors from './playlists.selectors';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsFacade {
  private store = inject(Store);

  allPlaylists = this.store.selectSignal(PlaylistsSelectors.allPlaylists);

  arePlaylistsLoaded = this.store.selectSignal(
    PlaylistsSelectors.arePlaylistsLoaded
  );

  loadPlaylists(): void {
    this.store.dispatch(PlaylistsActions.loadPlaylists());
  }
}
