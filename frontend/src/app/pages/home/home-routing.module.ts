import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TilComponent } from './components/til/til.component';

const routes: Routes = [{
  path: "",
  children: [
    {
      path: "",
      component: HomeComponent,
      children: [
        {
          path: "",
          pathMatch: "full",
          component: ProjectsComponent
        },
        {
          path: "work-experiences",
          pathMatch: "full",
          component: TimelineComponent
        },
        {
          path: "new-things-i-learnt",
          pathMatch: "full",
          component: TilComponent
        },
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
