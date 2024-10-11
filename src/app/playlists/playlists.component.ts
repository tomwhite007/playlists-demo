import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  type OnInit,
} from '@angular/core';
import { PlaylistsFacade } from '../+state/playlists.facade';
import { PlaylistsTableComponent } from './playlists-table/playlists-table.component';

@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [CommonModule, PlaylistsTableComponent],
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistsComponent implements OnInit {
  playlistsFacade = inject(PlaylistsFacade);

  arePlaylistsLoaded = this.playlistsFacade.arePlaylistsLoaded;
  allPlaylists = this.playlistsFacade.allPlaylists;

  ngOnInit(): void {
    this.playlistsFacade.loadPlaylists();
  }
}
