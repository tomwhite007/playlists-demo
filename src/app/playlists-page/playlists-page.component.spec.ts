import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { PlaylistsFacade } from '../+state/playlists.facade';
import { PlaylistsPageComponent } from './playlists-page.component';

describe('PlaylistsPageComponent', () => {
  let component: PlaylistsPageComponent;
  let fixture: ComponentFixture<PlaylistsPageComponent>;
  let table: HTMLElement | null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockPlaylistsFacade: Record<keyof PlaylistsFacade, any> = {
    allPlaylists: signal([]),
    arePlaylistsLoaded: signal(false),
    loadPlaylists: jasmine.createSpy(),
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

  it('should loadPlaylists on init', () => {
    expect(mockPlaylistsFacade.loadPlaylists).toHaveBeenCalled();
  });

  describe('When playlists are NOT loaded', () => {
    beforeEach(() => {
      setLoadedAndGetTable(false);
    });

    it('should NOT show app-playlists-table', () => {
      expect(table).toBeFalsy();
    });
  });

  describe('When playlists ARE loaded', () => {
    beforeEach(() => {
      setLoadedAndGetTable(true);
    });

    it('should NOT show app-playlists-table', () => {
      expect(table).toBeTruthy();
    });
  });

  function setLoadedAndGetTable(isLoaded: boolean) {
    mockPlaylistsFacade.arePlaylistsLoaded.set(isLoaded);
    fixture.detectChanges();
    table = fixture.nativeElement.querySelector('app-playlists-table');
  }
});
