import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PlaylistsApiService } from './playlists-api.service';
import { PlaylistsActions } from './playlists.actions';
import { FeaturedPlaylistsApiResult } from './playlists.model';
import { adaptPlaylistsApiResult } from './playlists.utils';

@Injectable()
export class PlaylistsEffects {
  actions$: Actions = inject(Actions);
  api = inject(PlaylistsApiService);

  playlistsPlaylists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PlaylistsActions.loadPlaylists),
      switchMap(() =>
        this.api.getPlaylists().pipe(
          map((result: FeaturedPlaylistsApiResult) => {
            const playlists = adaptPlaylistsApiResult(result);
            return PlaylistsActions.loadPlaylistsSuccess({ playlists });
          }),
          catchError((error) =>
            of(PlaylistsActions.loadPlaylistsFailure({ error }))
          )
        )
      )
    );
  });
}
