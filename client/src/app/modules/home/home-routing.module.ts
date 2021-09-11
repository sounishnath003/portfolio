import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from "./components/main-content/main-content.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: '', component: MainContentComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
