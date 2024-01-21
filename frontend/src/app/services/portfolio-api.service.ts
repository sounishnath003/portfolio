import { Injectable } from '@angular/core';
import { PortfolioDB } from '../../../memdb/portfolioDB';
import { Observable, concatMap, from, map, of, repeat, timer } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root',
})
export class PortfolioApiService {
  private attributes = PortfolioDB.attributes;
  constructor(private readonly utilityService: UtilsService) {}

  get workedAtCompanies$(): Observable<
    { companyName: string; image: string }[]
  > {
    return of(PortfolioDB.workedAtCompanies);
  }

  get attributes$(): Observable<string> {
    return from(PortfolioDB.attributes).pipe(
      concatMap(this.utilityService.typeEffect$),
      repeat()
    );
  }
  get profileSummary$(): Observable<string> {
    return of(PortfolioDB.profileSummary);
  }

  get bio$(): Observable<string> {
    return of(PortfolioDB.aboutBio).pipe(
      map((data) =>
        data.replace(
          '{{yearOfStartWorking}}',
          `${Math.floor(
            new Date().getFullYear() - PortfolioDB.yearOfStartWorking
          )}`
        )
      )
    );
  }
}
