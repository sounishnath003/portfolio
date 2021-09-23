import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HerobannerComponent } from 'src/app/modules/projects/components/herobanner/herobanner.component';
import { SocialLinksComponent } from 'src/app/modules/projects/components/herobanner/social-links.component';
import { MarkdownToHtmlPipe } from '../shared/pipes/markdown-to-html.pipe';
import { FeaturedprojectsComponent } from './components/featuredprojects/featuredprojects.component';
import { HeaderComponent } from './components/featuredprojects/projectdetails/header.component';
import {
  ProjectdetailsComponent,
  Safe,
} from './components/featuredprojects/projectdetails/projectdetails.component';
import { GithubprojectsComponent } from './components/githubprojects/githubprojects.component';
import { GitprojectcardComponent } from './components/githubprojects/gitprojectcard.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    FeaturedprojectsComponent,
    HerobannerComponent,
    SocialLinksComponent,
    GithubprojectsComponent,
    GitprojectcardComponent,
    ProjectdetailsComponent,
    HeaderComponent,
    MarkdownToHtmlPipe,
    Safe,
  ],
  imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
