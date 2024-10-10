import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  type OnInit,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { PlaylistsActions } from '../+state/playlists.actions';

@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [CommonModule, MatButton],
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistsComponent implements OnInit {
  store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(PlaylistsActions.loadPlaylists());
  }
}
