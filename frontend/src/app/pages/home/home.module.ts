import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PortfolioApiService } from '../../services/portfolio-api.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeRoutingModule],
  providers: [PortfolioApiService],
})
export class HomeModule {}
