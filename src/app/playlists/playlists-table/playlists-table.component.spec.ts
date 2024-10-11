import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsTableComponent } from './playlists-table.component';

describe('PlaylistsTableComponent', () => {
  let component: PlaylistsTableComponent;
  let fixture: ComponentFixture<PlaylistsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
