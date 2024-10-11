import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { PlaylistsEffects } from './playlists.effects';

describe('PlaylistsEffects', () => {
  let actions$: Observable<any>;
  let effects: PlaylistsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlaylistsEffects,
        provideMockActions(() => actions$),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    effects = TestBed.inject(PlaylistsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
