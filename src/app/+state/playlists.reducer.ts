import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import { PlaylistsActions } from './playlists.actions';
import { Playlists } from './playlists.model';

export const playlistsFeatureKey = 'playlists';

export interface State extends EntityState<Playlists> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Playlists> =
  createEntityAdapter<Playlists>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const playlistsReducer = createReducer(
  initialState,
  on(PlaylistsActions.loadPlaylists, (state, action) => {
    console.log('ha');
    return state;
  }),
  on(PlaylistsActions.loadPlaylistsSuccess, (state, action) =>
    adapter.upsertMany(action.playlists, state)
  ),
  on(PlaylistsActions.clearPlaylists, (state) => adapter.removeAll(state))
);

export const playlistsFeature = createFeature({
  name: playlistsFeatureKey,
  reducer: playlistsReducer,
  extraSelectors: ({ selectPlaylistsState }) => ({
    ...adapter.getSelectors(selectPlaylistsState),
  }),
});

export const { selectIds, selectEntities, selectAll, selectTotal } =
  playlistsFeature;
