import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold } from 'jasmine-marbles';
import { TestObservable } from 'jasmine-marbles/src/test-observables';
import { Observable, of, throwError } from 'rxjs';
import { PlaylistsApiService } from './playlists-api.service';
import { PlaylistsActions } from './playlists.actions';
import { PlaylistsEffects } from './playlists.effects';
import {
  fakeApiError,
  mockAdaptedPlaylistsArray,
  mockFeaturedPLaylistsApiResult,
} from './playlists.spec-mocks';

describe('PlaylistsEffects', () => {
  let actions$: Observable<any>;
  let effects: PlaylistsEffects;
  let expected: TestObservable;

  const mockPlaylistsApiService = {
    getPlaylists: jasmine.createSpy(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlaylistsEffects,
        provideMockActions(() => actions$),
        {
          provide: PlaylistsApiService,
          useValue: mockPlaylistsApiService,
        },
      ],
    });

    effects = TestBed.inject(PlaylistsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('playlistsPlaylists$', () => {
    describe('when featured-playlists api returns successfully', () => {
      beforeEach(() => {
        mockPlaylistsApiService.getPlaylists.and.returnValue(
          of(mockFeaturedPLaylistsApiResult)
        );
        actions$ = cold('-a-', { a: PlaylistsActions.loadPlaylists() });
        expected = cold('-a-', {
          a: PlaylistsActions.loadPlaylistsSuccess({
            playlists: mockAdaptedPlaylistsArray,
          }),
        });
      });

      it('should return a success action with adapted playlists array', () => {
        expect(effects.playlistsPlaylists$).toBeObservable(expected);
      });
    });

    describe('when featured-playlists api fails', () => {
      beforeEach(() => {
        mockPlaylistsApiService.getPlaylists.and.returnValue(
          throwError(() => fakeApiError)
        );
        actions$ = cold('-a-', { a: PlaylistsActions.loadPlaylists() });
        expected = cold('-a-', {
          a: PlaylistsActions.loadPlaylistsFailure({ error: fakeApiError }),
        });
      });

      it('should return a fail action with error body payload', () => {
        expect(effects.playlistsPlaylists$).toBeObservable(expected);
      });
    });
  });
});
