import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CardHolderComponent } from 'src/app/components/card-holder/card-holder.component';

import { GithubHeatmapComponent } from 'src/app/components/github-heatmap/github-heatmap.component';
import { IntroductionComponent } from 'src/app/components/introduction/introduction.component';
import { NewsletterSubsComponent } from 'src/app/components/newsletter-subs/newsletter-subs.component';
import { NoDataComponent } from 'src/app/components/no-data/no-data.component';
import { QuickThoughtsComponent } from 'src/app/components/quick-thoughts/quick-thoughts.component';
import { CardTitlePipe } from 'src/app/components/quick-thoughts/recommend-card/card-title.pipe';
import { RecommendCardComponent } from 'src/app/components/quick-thoughts/recommend-card/recommend-card.component';
import { RecentBlogsComponent } from 'src/app/components/recent-blogs/recent-blogs.component';
import { SkillsComponent } from 'src/app/components/skills/skills.component';
import { NzZorroModule } from 'src/app/shared/nz-zorro/nz-zorro.module';
import { MarkdownParserPipe } from 'src/app/shared/pipe/markdown-parser.pipe';
import { IntlDatetimePipe } from 'src/app/shared/pipes/intl-datetime.pipe';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';
import { QuickProjectsComponent } from '../../components/quick-projects/quick-projects.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    IntroductionComponent,
    NewsletterSubsComponent,
    GithubHeatmapComponent,
    SkillsComponent,
    HomeComponent,
    QuickThoughtsComponent,
    QuickProjectsComponent,
    RecentBlogsComponent,
    RecommendCardComponent,
    CardTitlePipe,
    MarkdownParserPipe,
    NoDataComponent,
    CardHolderComponent,
    IntlDatetimePipe
  ],
  providers: [PortfolioService],
  imports: [CommonModule, HomeRoutingModule, NzZorroModule, HttpClientModule],
})
export class HomeModule {}
