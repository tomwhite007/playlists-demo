import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Playlist } from './playlists.model';

export const PlaylistsActions = createActionGroup({
  source: 'Playlists/API',
  events: {
    'Load Playlists': emptyProps(),
    'Load Playlists Success': props<{ playlists: Playlist[] }>(),
    'Load Playlists Failure': props<{ error: any }>(),
    'Clear Playlists': emptyProps(),
  },
});
