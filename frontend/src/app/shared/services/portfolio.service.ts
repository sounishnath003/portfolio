import { Injectable } from '@angular/core';
import { filter, map, Observable, of, repeat, takeLast, timer } from 'rxjs';
import {
  BlogPost,
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

  get recentBlogs$(): Observable<BlogPost[]> {
    return of(this.portfolioData.blogPosts).pipe(
      filter((x) => x.length > 0),
      takeLast(3),
      map((x) => {
        return x.reverse().map((y) => ({
          ...y,
          readingTime: this.getReadingTimeInMinutes(y.content),
        }));
      })
    );
  }

  private getReadingTimeInMinutes(content: string): string {
    const wordsPerMinute = 200;
    const noOfWords = content.split(/\s/g).length;
    return `${Math.ceil(noOfWords / wordsPerMinute)} mins`;
  }
}
