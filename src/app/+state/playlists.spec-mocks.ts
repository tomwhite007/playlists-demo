import { PlaylistsFeatureState, RemoteDataState } from './playlists.reducer';

export const mockFeaturedPLaylistsApiResult = {
  name: 'Mock Featured Playlists',
  content: [
    {
      id: 'pl.1',
      kind: 'playlist',
      name: 'New Music',
      url: 'https://music1',
      curator_name: 'Apple Music',
      artwork: 'https://image1',
    },
    {
      id: 'pl.2',
      kind: 'playlist',
      name: 'Hits',
      url: 'https://music2',
      curator_name: 'Apple Music Hits',
      artwork: 'https://image2',
    },
  ],
};

export const mockAdaptedPlaylistsArray = [
  {
    id: '1',
    name: 'New Music',
    url: 'https://music1',
    curator: 'Apple Music',
    imgSrc: 'https://image1',
  },
  {
    id: '2',
    name: 'Hits',
    url: 'https://music2',
    curator: 'Apple Music Hits',
    imgSrc: 'https://image2',
  },
];

export const fakeApiError = {
  code: 500,
  message: 'fake error',
};

export const mockSuccessState: PlaylistsFeatureState = {
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      name: 'New Music',
      url: 'https://music1',
      curator: 'Apple Music',
      imgSrc: 'https://image1',
    },
    2: {
      id: '2',
      name: 'Hits',
      url: 'https://music2',
      curator: 'Apple Music Hits',
      imgSrc: 'https://image2',
    },
  },
  remoteDataState: { status: RemoteDataState.Loaded },
};

export const mockErrorState: PlaylistsFeatureState = {
  ids: [],
  entities: {},
  remoteDataState: { status: RemoteDataState.Error, error: fakeApiError },
};
