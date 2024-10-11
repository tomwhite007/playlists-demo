import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { PlaylistsFacade } from '../+state/playlists.facade';
import { PlaylistsPageComponent } from './playlists-page.component';

describe('PlaylistsPageComponent', () => {
  let component: PlaylistsPageComponent;
  let fixture: ComponentFixture<PlaylistsPageComponent>;

  const mockPlaylistsFacade: Record<keyof PlaylistsFacade, any> = {
    allPlaylists: signal([]),
    arePlaylistsLoaded: signal(false),
    loadPlaylists: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistsPageComponent],
      providers: [{ provide: PlaylistsFacade, useValue: mockPlaylistsFacade }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaylistsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
