import { Injectable } from '@angular/core';
import { map, Observable, of, repeat, timer } from 'rxjs';
import {
  CompaniesWorkedAt,
  PortfolioConfigurationInterface,
  Recommendation,
  SkillsSet,
} from 'src/app/template/portfolio-config.interface';
import DATA from '../../template/portfolio.config.json';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private portfolioData: PortfolioConfigurationInterface = DATA;

  constructor() {}

  get avatarURL$(): Observable<string> {
    return of(this.portfolioData.avatarURL);
  }

  get currentBio$(): Observable<string> {
    return of(this.portfolioData.currentBio);
  }

  get tagLines$(): Observable<string> {
    return timer(0, 2800).pipe(
      map(() => {
        const d = '' + this.portfolioData.selfFeatures.shift();
        this.portfolioData.selfFeatures.push(d);
        return d;
      }),
      repeat()
    );
  }

  get skillsSets$(): Observable<SkillsSet[]> {
    return of(this.portfolioData.skillsSets);
  }

  get companiesWorkedAt$(): Observable<Array<CompaniesWorkedAt>> {
    return of(this.portfolioData.companiesWorkedAt);
  }

  getSocialLink(type: string) {
    return this.portfolioData.socialLinks.filter((x) =>
      x.type.toLowerCase().includes(type.toLowerCase())
    )[0];
  }

  get recommendations$(): Observable<Recommendation[]> {
    return of(this.portfolioData.recommendations);
  }
}
