import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-playlists',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>playlists works!</p>`,
  styleUrl: './playlists.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistsComponent implements OnInit {

  ngOnInit(): void { }

}
