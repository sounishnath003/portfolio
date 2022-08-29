import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GithubHeatmapComponent } from 'src/app/components/github-heatmap/github-heatmap.component';
import { IntroductionComponent } from 'src/app/components/introduction/introduction.component';
import { NewsletterSubsComponent } from 'src/app/components/newsletter-subs/newsletter-subs.component';
import { SkillsComponent } from 'src/app/components/skills/skills.component';
import { NzZorroModule } from 'src/app/shared/nz-zorro/nz-zorro.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    IntroductionComponent,
    NewsletterSubsComponent,
    GithubHeatmapComponent,
    SkillsComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, NzZorroModule],
})
export class HomeModule {}
