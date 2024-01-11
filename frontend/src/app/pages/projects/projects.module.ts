import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { PageHeadComponent } from 'src/app/components/page-head/page-head.component';

import { NzZorroModule } from 'src/app/shared/nz-zorro/nz-zorro.module';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';
import { ProjectsDetailsComponent } from './projects-details/projects-details.component';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsHomeComponent,
    ProjectsDetailsComponent,
    PageHeadComponent,
  ],
  providers: [PortfolioService],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    NzZorroModule,
    ComponentsModule,
  ],
})
export class ProjectsModule {}
