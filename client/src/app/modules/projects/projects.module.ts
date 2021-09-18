import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturedprojectsComponent } from './components/featuredprojects/featuredprojects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [ProjectsComponent, FeaturedprojectsComponent],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
