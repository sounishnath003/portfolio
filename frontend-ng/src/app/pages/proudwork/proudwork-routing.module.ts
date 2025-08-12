import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProudworkComponent } from './proudwork.component';

const routes: Routes = [
  {
    path: '',
    component: ProudworkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProudworkRoutingModule {}
