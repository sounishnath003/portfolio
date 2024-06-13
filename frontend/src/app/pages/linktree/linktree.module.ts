import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { LinktreeRoutingModule } from './linktree-routing.module';
import { PortfolioApiService } from '../../services/portfolio-api.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, LinktreeRoutingModule],
  providers: [PortfolioApiService],
})
export class LinktreeModule {}
