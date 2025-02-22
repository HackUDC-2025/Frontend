import { Routes } from '@angular/router';
import { documentationRoutes } from './documentation/documentation.routes';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'open-camera',
    loadComponent: () => import('./open-camera/open-camera.page').then( m => m.OpenCameraPage)
  },
  {
    path: 'documentation',
    loadChildren: () => import('./documentation/documentation.module')
      .then((m) => m.DocumentationModule),
  }
];
