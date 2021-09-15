import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { CmsComponent } from './cms.component';
import { AddFormComponent } from './components/project-type/add-form/add-form.component';
import { ProjectTypeComponent } from './components/project-type/project-type.component';
import { AddformComponent } from './components/projects/addform.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import {
  AuthGuardCanActivateChild,
  AuthGuardCanActivateSelf,
} from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CmsComponent,
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AuthComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardCanActivateSelf],
  },
  {
    path: 'dashboard',
    component: CmsComponent,
    canActivateChild: [AuthGuardCanActivateChild],
    children: [
      {
        path: 'project-type',
        component: ProjectTypeComponent,
        pathMatch: 'full',
      },
      {
        path: 'project-type/add',
        component: AddFormComponent,
        pathMatch: 'full',
      },
      {
        path: 'project-type/edit',
        component: AddFormComponent,
        pathMatch: 'full',
      },
      { path: 'projects', component: ProjectsComponent },

      {
        path: 'projects/add',
        component: AddformComponent,
        pathMatch: 'full',
      },
      {
        path: 'projects/edit',
        component: AddformComponent,
        pathMatch: 'full',
      },
      {
        path: 'skills',
        component: SkillsComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsRoutingModule {}
