import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { PlaylistsActions } from './playlists.actions';

@Injectable()
export class PlaylistsEffects {
  actions$: Actions = inject(Actions);

  playlistsPlaylists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlaylistsActions.loadPlaylists),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map((data) => {
            console.log(
              'PlaylistsActions.loadPlaylistsSuccess({ playlists: [] })'
            );
            return PlaylistsActions.loadPlaylistsSuccess({ playlists: [] });
          }),
          catchError((error) =>
            of(PlaylistsActions.loadPlaylistsFailure({ error }))
          )
        )
      )
    );
  });
}
