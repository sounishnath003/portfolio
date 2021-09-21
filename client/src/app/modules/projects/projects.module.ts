import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HerobannerComponent } from 'src/app/modules/projects/components/herobanner/herobanner.component';
import { SocialLinksComponent } from 'src/app/modules/projects/components/herobanner/social-links.component';
import { FeaturedprojectsComponent } from './components/featuredprojects/featuredprojects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { GithubprojectsComponent } from './components/githubprojects/githubprojects.component';
import { GitprojectcardComponent } from './components/githubprojects/gitprojectcard.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    FeaturedprojectsComponent,
    HerobannerComponent,
    SocialLinksComponent,
    GithubprojectsComponent,
    GitprojectcardComponent,
  ],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
