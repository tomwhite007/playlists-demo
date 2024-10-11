import { createSelector } from '@ngrx/store';
import {
  PlaylistsFeatureState,
  RemoteDataState,
  selectAll,
  selectPlaylistsState,
} from './playlists.reducer';

export const arePlaylistsLoaded = createSelector(
  selectPlaylistsState,
  (state: PlaylistsFeatureState) =>
    state.remoteDataState.status === RemoteDataState.Loaded
);

export const allPlaylists = selectAll;
