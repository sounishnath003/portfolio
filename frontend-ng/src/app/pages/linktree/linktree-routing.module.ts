import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinktreeComponent } from './linktree.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LinktreeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinktreeRoutingModule {}
