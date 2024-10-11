import { Component, input } from '@angular/core';
import { Playlist } from '../../+state/playlists.model';

@Component({
  selector: 'app-playlists-table',
  standalone: true,
  imports: [],
  templateUrl: './playlists-table.component.html',
  styleUrl: './playlists-table.component.scss',
})
export class PlaylistsTableComponent {
  playlists = input.required<Playlist[]>();
}
