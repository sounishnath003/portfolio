import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { GithubHeatmapComponent } from 'src/app/components/github-heatmap/github-heatmap.component';
import { IntroductionComponent } from 'src/app/components/introduction/introduction.component';
import { NewsletterSubsComponent } from 'src/app/components/newsletter-subs/newsletter-subs.component';
import { QuickProjectsComponent } from 'src/app/components/quick-projects/quick-projects.component';
import { QuickThoughtsComponent } from 'src/app/components/quick-thoughts/quick-thoughts.component';

import { RecommendCardComponent } from 'src/app/components/quick-thoughts/recommend-card/recommend-card.component';
import { RecentBlogsComponent } from 'src/app/components/recent-blogs/recent-blogs.component';
import { SkillsComponent } from 'src/app/components/skills/skills.component';
import { NzZorroModule } from 'src/app/shared/nz-zorro/nz-zorro.module';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    IntroductionComponent,
    NewsletterSubsComponent,
    GithubHeatmapComponent,
    SkillsComponent,
    QuickThoughtsComponent,
    QuickProjectsComponent,
    RecentBlogsComponent,
    RecommendCardComponent,
  ],
  providers: [PortfolioService],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzZorroModule,
    HttpClientModule,
    ComponentsModule,
  ],
})
export class HomeModule {}
