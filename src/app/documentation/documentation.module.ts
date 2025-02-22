import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./documentation-menu/documentation-menu.page')
      .then((m) => m.DocumentationMenuPage),
  },
  {
    path: 'color-palette',
    loadComponent: () => import('./color-palette/color-palette.page')
      .then((m) => m.ColorPalettePage),
  },
  {
    path: 'typography',
    loadComponent: () => import('./typography/typography.page')
      .then((m) => m.TypographyPage),
  },
  {
    path: 'ui-components',
    loadComponent: () => import('./ui-components/ui-components.page')
      .then((m) => m.UiComponentsPage),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationModule {}
