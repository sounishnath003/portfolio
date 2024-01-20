import { Component, Input } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { PortfolioApiService } from '../../services/portfolio-api.service';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  attributes$: Observable<string>;
  profileSummary$: Observable<string>;
  workedAtCompanies$: Observable<{ companyName: string; image: string }[]>;

  constructor(private readonly portfolioService: PortfolioApiService) {
    this.attributes$ = this.portfolioService.attributes$;
    this.profileSummary$ = this.portfolioService.profileSummary$;
    this.workedAtCompanies$ = this.portfolioService.workedAtCompanies$;
  }
}
