import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, of, repeat, takeLast, timer } from 'rxjs';
import {
  BlogPost,
  CompaniesWorkedAt,
  PortfolioConfigurationInterface,
  Project,
  Recommendation,
  SkillsSet,
} from 'src/app/template/portfolio-config.interface';
import DATA from '../../template/portfolio.config.json';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private portfolioData: PortfolioConfigurationInterface = DATA;
  constructor(private httpService: HttpClient) {
    // this.httpService
    //   .get<PortfolioConfigGistInterface>(
    //     `https://api.github.com/gists/8553c94a81b7ad5382c590d28f31a37e`
    //   )
    //   .pipe(map((x) => JSON.parse(x.files['portfolio.config.json'].content)))
    //   .subscribe((data) => {
    //     this.portfolioData$.next({ ...data });
    //   });
  }

  get githubUsername() {
    return this.portfolioData.githubUsername;
  }

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

  getSocialLink(type: string = 'ALL') {
    if (type === 'ALL') return of(this.portfolioData.socialLinks);
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
      map((x) => {
        return this.processAndReformatData([...x], 3);
      })
    );
  }

  get allBlogs$(): Observable<BlogPost[]> {
    return of(this.portfolioData.blogPosts).pipe(
      filter((x) => x.length > 0),
      takeLast(3),
      map((x) => {
        return this.processAndReformatData([...x], -1);
      })
    );
  }

  public getBlogPostBySlug$(slug: string): Observable<BlogPost> {
    return of(this.portfolioData.blogPosts).pipe(
      filter((x) => x.length > 0),
      map((x) => {
        return this.processAndReformatData(
          x.filter((y) => y.slug.toLowerCase() === slug.toLowerCase())
        )[0];
      })
    );
  }

  // if top==-1 returns all the blogs || projects ; else returns top n blogs || projects
  private processAndReformatData(
    x: BlogPost[] | Project[],
    top: number = -1
  ): {
    content$: Observable<string>;
    readingTime: string;
    id: string;
    slug: string;
    tags: string[];
    title: string;
    shortDescription: string;
    content: string;
    avatar: string;
    author: string;
    datePublished: string;
  }[] {
    if (top === -1) {
      return x.reverse().map((y) => ({
        ...y,
        content$: this.loadFileFromAssets$(y.content),
        readingTime: this.getReadingTimeInMinutes(y.content),
      }));
    }
    return x
      .reverse()
      .slice(x.length - 3)
      .map((y) => ({
        ...y,
        content$: this.loadFileFromAssets$(y.content),
        readingTime: this.getReadingTimeInMinutes(y.content),
      }));
  }

  private getReadingTimeInMinutes(content: string): string {
    const wordsPerMinute = 200;
    const noOfWords = content.split(/\s/g).length;
    return `${Math.ceil(noOfWords / wordsPerMinute)} min read`;
  }

  private loadFileFromAssets$(filepath: string): Observable<string> {
    return this.httpService.get(`/assets/contents${filepath}`, {
      responseType: 'text',
    });
  }
}
