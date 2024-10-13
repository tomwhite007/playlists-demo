import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'playlists' },
  {
    path: 'playlists',
    loadComponent: () =>
      import('./playlists-page/playlists-page.component').then(
        (m) => m.PlaylistsPageComponent
      ),
    providers: [{ provide: Window, useValue: window }],
  },
];
