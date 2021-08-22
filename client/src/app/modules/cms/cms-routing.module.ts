import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { CmsComponent } from './cms.component';
import { ProjectTypeComponent } from './components/project-type/project-type.component';
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
    children: [{ path: 'project-type', component: ProjectTypeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsRoutingModule {}
