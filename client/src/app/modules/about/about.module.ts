import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { HerobannerComponent } from './components/herobanner/herobanner.component';
import { SocialLinksComponent } from './components/herobanner/social-links.component';

@NgModule({
  declarations: [AboutComponent, HerobannerComponent, SocialLinksComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
