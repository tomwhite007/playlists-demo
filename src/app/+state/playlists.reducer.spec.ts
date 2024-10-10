import { initialState, playlistsReducer } from './playlists.reducer';

describe('Playlists Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = playlistsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
