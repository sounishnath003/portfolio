import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { HerobannerComponent } from './components/herobanner/herobanner.component';
import { SocialLinksComponent } from './components/herobanner/social-links.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TimelinecardComponent } from './components/timeline/timelinecard.component';
import { ResumeboxcardComponent } from './components/resumeboxcard/resumeboxcard.component';

@NgModule({
  declarations: [AboutComponent, HerobannerComponent, SocialLinksComponent, TimelineComponent, TimelinecardComponent, ResumeboxcardComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
