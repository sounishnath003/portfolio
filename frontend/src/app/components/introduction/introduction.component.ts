import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';
import { CompaniesWorkedAt } from 'src/app/template/portfolio-config.interface';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
})
export class IntroductionComponent implements OnInit {
  featureObserver$!: Observable<string>;
  currentBio$!: Observable<string>;
  companies$!: Observable<CompaniesWorkedAt[]>;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.currentBio$ = this.portfolioService.currentBio$;
    this.featureObserver$ = this.portfolioService.tagLines$;
    this.companies$ = this.portfolioService.companiesWorkedAt$;
  }
}
