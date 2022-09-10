import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogsComponent } from './blogs.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: BlogHomeComponent,
      },
      {
        path: ':slug',
        pathMatch: 'full',
        component: BlogDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}
