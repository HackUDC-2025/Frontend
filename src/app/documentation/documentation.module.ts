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
    path: 'about-us',
    loadComponent: () => import('./about-us/about-us.page')
      .then((m) => m.AboutUsPage),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationModule {}
