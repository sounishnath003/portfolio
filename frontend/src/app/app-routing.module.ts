import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    title: 'Sounish Nath | Portfolio',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'blogs',
    title: 'Sounish Nath | Blogs',
    loadChildren: () =>
      import('./pages/blogs/blogs.module').then((m) => m.BlogsModule),
  },
  {
    path: 'projects',
    title: 'Sounish Nath | Projects',
    loadChildren: () =>
      import('./pages/projects/projects.module').then((m) => m.ProjectsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
