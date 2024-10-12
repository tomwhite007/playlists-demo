import { PlaylistsFeatureState, RemoteDataState } from './playlists.reducer';
import { arePlaylistsLoaded } from './playlists.selectors';

describe('Playlists Selectors', () => {
  let state: PlaylistsFeatureState;

  beforeEach(() => {
    state = {
      ids: [],
      entities: {},
      remoteDataState: { status: RemoteDataState.NotLoaded },
    };
  });

  describe('arePlaylistsLoaded', () => {
    let result: boolean;

    it('should return true when status is Loaded', () => {
      state = {
        ...state,
        remoteDataState: { status: RemoteDataState.Loaded },
      };
      result = arePlaylistsLoaded.projector(state);
      expect(result).toBeTrue();
    });

    it('should return false when status is NotLoaded', () => {
      state = {
        ...state,
        remoteDataState: { status: RemoteDataState.NotLoaded },
      };
      result = arePlaylistsLoaded.projector(state);
      expect(result).toBeFalse();
    });
  });
});
