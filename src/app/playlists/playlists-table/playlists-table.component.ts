import { Component, input, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Playlist } from '../../+state/playlists.model';

@Component({
  selector: 'app-playlists-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './playlists-table.component.html',
  styleUrl: './playlists-table.component.scss',
})
export class PlaylistsTableComponent implements OnInit {
  playlists = input.required<Playlist[]>();

  displayedColumns: string[] = ['name', 'curator', 'image'];
  dataSource!: MatTableDataSource<Playlist>;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Playlist>(this.playlists());
  }

  openPlaylist(row: Playlist) {
    window.location.href = row.url;
  }
}
