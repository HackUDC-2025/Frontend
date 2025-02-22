import { Routes } from '@angular/router';

export const documentationRoutes: Routes = [
  {
    path: 'documentation',
    loadChildren: () => import('./documentation.module')
      .then((m) => m.DocumentationModule),
  },
];
