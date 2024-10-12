import { PlaylistsActions } from './playlists.actions';
import { initialState, playlistsReducer } from './playlists.reducer';
import {
  fakeApiError,
  mockAdaptedPlaylistsArray,
  mockErrorState,
  mockSuccessState,
} from './playlists.spec-mocks';

describe('Playlists Reducer', () => {
  describe('loadPlaylistsSuccess', () => {
    it('should return state with entities set and remote data status Loaded', () => {
      const result = playlistsReducer(
        initialState,
        PlaylistsActions.loadPlaylistsSuccess({
          playlists: mockAdaptedPlaylistsArray,
        })
      );

      expect(result).toEqual(mockSuccessState);
    });
  });

  describe('loadPlaylistsFailure', () => {
    it('should return state with no entities and remote data status error', () => {
      const result = playlistsReducer(
        initialState,
        PlaylistsActions.loadPlaylistsFailure({
          error: fakeApiError,
        })
      );

      expect(result).toEqual(mockErrorState);
    });
  });

  describe('clearPlaylists', () => {
    it('should return initial state', () => {
      const result = playlistsReducer(
        mockSuccessState,
        PlaylistsActions.clearPlaylists()
      );

      expect(result).toEqual(initialState);
    });
  });
});
