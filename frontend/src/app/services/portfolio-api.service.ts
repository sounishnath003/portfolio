import { Injectable } from '@angular/core';
import { PortfolioDB } from '../../../memdb/portfolioDB';
import { Observable, map, of, repeat, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortfolioApiService {
  private attributes = PortfolioDB.attributes;
  constructor() {}

  get workedAtCompanies$(): Observable<
    { companyName: string; image: string }[]
  > {
    return of(PortfolioDB.workedAtCompanies);
  }

  get attributes$(): Observable<string> {
    return timer(0, 3000).pipe(
      map(() => {
        const item = '' + this.attributes.shift();
        this.attributes.push(item);
        return item;
      }),
      repeat()
    );
  }
  get profileSummary$(): Observable<string> {
    return of(PortfolioDB.profileSummary);
  }
}
