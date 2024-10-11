import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import { PlaylistsActions } from './playlists.actions';
import { Playlist } from './playlists.model';

export const playlistsFeatureKey = 'playlists';

export enum RemoteDataState {
  NotLoaded = 'not-loaded',
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}

export interface PlaylistsFeatureState extends EntityState<Playlist> {
  remoteDataState: {
    status: RemoteDataState;
    error?: any;
  };
}

export const adapter: EntityAdapter<Playlist> = createEntityAdapter<Playlist>();

export const initialState: PlaylistsFeatureState = adapter.getInitialState({
  remoteDataState: { status: RemoteDataState.NotLoaded },
});

export const playlistsReducer = createReducer(
  initialState,
  on(PlaylistsActions.loadPlaylistsSuccess, (state, { playlists }) =>
    adapter.upsertMany(playlists, {
      ...state,
      remoteDataState: { status: RemoteDataState.Loaded },
    })
  ),
  on(PlaylistsActions.loadPlaylistsFailure, (state, { error }) => ({
    ...state,
    remoteDataState: { status: RemoteDataState.Error, error },
  })),
  on(PlaylistsActions.clearPlaylists, () => initialState)
);

export const playlistsFeature = createFeature({
  name: playlistsFeatureKey,
  reducer: playlistsReducer,
  extraSelectors: ({ selectPlaylistsState }) => ({
    ...adapter.getSelectors(selectPlaylistsState),
  }),
});

export const { selectIds, selectEntities, selectAll, selectPlaylistsState } =
  playlistsFeature;
