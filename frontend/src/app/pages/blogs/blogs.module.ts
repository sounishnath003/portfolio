import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';

import { NzZorroModule } from 'src/app/shared/nz-zorro/nz-zorro.module';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';

@NgModule({
  declarations: [BlogsComponent, BlogDetailComponent, BlogHomeComponent],
  providers: [PortfolioService],
  imports: [CommonModule, BlogsRoutingModule, NzZorroModule, ComponentsModule],
})
export class BlogsModule {}
