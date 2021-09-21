import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectdetailsComponent } from './components/featuredprojects/projectdetails/projectdetails.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
  {
    path: 'project-details/:id/:projectName/view',
    component: ProjectdetailsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
