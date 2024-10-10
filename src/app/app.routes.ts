import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'playlists' },
  {
    path: 'playlists',
    loadComponent: () =>
      import('./playlists/playlists.component').then(
        (m) => m.PlaylistsComponent
      ),
    providers: [provideHttpClient()],
  },
];
