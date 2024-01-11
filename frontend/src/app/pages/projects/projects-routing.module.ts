import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProjectsHomeComponent,
      },
      {
        path: ':slug',
        pathMatch: 'full',
        component: ProjectsDetailsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
