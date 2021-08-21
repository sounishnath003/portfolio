import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { CmsComponent } from './cms.component';
import { ProjectTypeComponent } from './components/project-type/project-type.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CmsComponent,
    children: [
      {
        path: '',
        component: AuthComponent,
        canActivateChild: [AuthGuard],
        children: [
          { path: 'dashboard/project-type', component: ProjectTypeComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsRoutingModule {}
