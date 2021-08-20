import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsComponent } from './cms.component';
import { ProjectTypeComponent } from './components/project-type/project-type.component';

const routes: Routes = [
  {
    path: '',
    component: CmsComponent,
    children: [{ path: '', component: ProjectTypeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsRoutingModule {}
