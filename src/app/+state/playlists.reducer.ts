import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import { PlaylistsActions } from './playlists.actions';
import { Playlist } from './playlists.model';

export const playlistsFeatureKey = 'playlists';

export interface State extends EntityState<Playlist> {}

export const adapter: EntityAdapter<Playlist> = createEntityAdapter<Playlist>();

export const initialState: State = adapter.getInitialState({});

export const playlistsReducer = createReducer(
  initialState,
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
