import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';
import {
  BlogPost,
  CompaniesWorkedAt,
  Project,
  Recommendation,
  SkillsSet,
} from 'src/app/template/portfolio-config.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featureObserver$!: Observable<string>;
  currentBio$!: Observable<string>;
  companies$!: Observable<CompaniesWorkedAt[]>;
  skillsSets$!: Observable<SkillsSet[]>;
  recommendations$!: Observable<Recommendation[]>;
  recentBlogPosts$!: Observable<BlogPost[]>;
  recentProjects$!: Observable<Project[]>;

  constructor(private readonly portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.currentBio$ = this.portfolioService.currentBio$;
    this.featureObserver$ = this.portfolioService.tagLines$;
    this.companies$ = this.portfolioService.companiesWorkedAt$;
    this.skillsSets$ = this.portfolioService.skillsSets$;
    this.recommendations$ = this.portfolioService.recommendations$;
    this.recentBlogPosts$ = this.portfolioService.recentBlogs$;
    this.recentBlogPosts$ = this.portfolioService.recentBlogs$;
  }
}
