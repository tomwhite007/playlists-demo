import {
  ChangeDetectionStrategy,
  Component,
  inject,
  type OnInit,
} from '@angular/core';
import { PlaylistsFacade } from '../+state/playlists.facade';
import { PlaylistsTableComponent } from './playlists-table/playlists-table.component';

@Component({
  selector: 'app-playlists-page',
  standalone: true,
  imports: [PlaylistsTableComponent],
  templateUrl: './playlists-page.component.html',
  styleUrl: './playlists-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistsPageComponent implements OnInit {
  playlistsFacade = inject(PlaylistsFacade);

  arePlaylistsLoaded = this.playlistsFacade.arePlaylistsLoaded;
  allPlaylists = this.playlistsFacade.allPlaylists;

  ngOnInit(): void {
    this.playlistsFacade.loadPlaylists();
  }
}
