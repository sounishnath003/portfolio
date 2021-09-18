import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { HerobannerComponent } from './components/herobanner/herobanner.component';
import { SocialLinksComponent } from './components/herobanner/social-links.component';

@NgModule({
  declarations: [
    BlogsComponent,
    BlogsComponent,
    HerobannerComponent,
    SocialLinksComponent,
  ],
  imports: [CommonModule, BlogsRoutingModule],
})
export class BlogsModule {}
