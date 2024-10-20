import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProjectViewComponent } from './pages/project-view/project-view.component';


export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'blogs',
    loadChildren: () =>
      import('./pages/blogs/blogs.module').then((m) => m.BlogsModule),
  },
  {
    path: "projects/:slugName",
    pathMatch: "full",
    component: ProjectViewComponent
  },
  {
    path: 'linktree',
    loadChildren: () =>
      import('./pages/linktree/linktree.module').then((m) => m.LinktreeModule),
  },
  {
    path: 'proudworks',
    loadChildren: () =>
      import('./pages/proudwork/proudwork.module').then(
        (m) => m.ProudworkModule
      ),
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  }
];
