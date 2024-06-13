import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'blogs',
    loadChildren: () =>
      import('./pages/blogs/blogs.module').then((m) => m.BlogsModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./pages/projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'linktree',
    loadChildren: () =>
      import('./pages/linktree/linktree.module').then((m) => m.LinktreeModule),
  },
];
