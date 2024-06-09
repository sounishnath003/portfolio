import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { PortfolioApiService } from '../../services/portfolio-api.service';
import { Observable } from 'rxjs';
import { AboutComponent } from '../../components/about/about.component';
import { SkillsetComponent } from '../../components/skillset/skillset.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, SkillsetComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name$: Observable<string>;
  attributes$: Observable<string>;
  profileSummary$: Observable<string>;
  workedAtCompanies$: Observable<{ companyName: string; image: string }[]>;
  bio$: Observable<string>;
  skillsets$: Observable<
    {
      domain: string;
      skills: string[];
    }[]
  >;

  constructor(private readonly portfolioService: PortfolioApiService) {
    this.name$ = this.portfolioService.name$;
    this.attributes$ = this.portfolioService.attributes$;
    this.profileSummary$ = this.portfolioService.profileSummary$;
    this.workedAtCompanies$ = this.portfolioService.workedAtCompanies$;
    this.bio$ = this.portfolioService.bio$;
    this.skillsets$ = this.portfolioService.skillsets$;
  }
}
