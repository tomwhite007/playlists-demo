import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  type OnInit,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { PlaylistsFacade } from '../+state/playlists.facade';

@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [CommonModule, MatButton],
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistsComponent implements OnInit {
  playlistsFacade = inject(PlaylistsFacade);

  ngOnInit(): void {
    this.playlistsFacade.loadPlaylists();
  }
}
