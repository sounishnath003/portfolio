import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { PortfolioApiService } from '../../services/portfolio-api.service';
import { Observable } from 'rxjs';
import { AboutComponent } from '../../components/about/about.component';
import { SkillsetComponent } from './components/skillset/skillset.component';
import { RecommendationsComponent } from '../../components/recommendations/recommendations.component';
import { ExperienceTimescrollComponent } from '../../components/experience-timescroll/experience-timescroll.component';
import { GetInTouchComponent } from '../../components/get-in-touch/get-in-touch.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProjectsComponent } from "./components/projects/projects.component";

@Component({
    selector: 'app-home',
    imports: [
        HeroComponent,
        AboutComponent,
        SkillsetComponent,
        RecommendationsComponent,
        ExperienceTimescrollComponent,
        GetInTouchComponent,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        ProjectsComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
  name$: Observable<string>;
  resume$: Observable<string>;
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
  recommendations$: Observable<
    {
      personWhoProvided: string;
      profileLink: string;
      avatar: string;
      role: string;
      organization: string;
      comments: string;
    }[]
  >;
  professionalExperiencesTimeline$: Observable<
    {
      timeInfo: string;
      location: string;
      roleOrWork: string;
      organizationName: string;
      content: string;
    }[]
  >;

  constructor(private readonly portfolioService: PortfolioApiService) {
    this.name$ = this.portfolioService.name$;
    this.resume$ = this.portfolioService.resume$;
    this.attributes$ = this.portfolioService.attributes$;
    this.profileSummary$ = this.portfolioService.profileSummary$;
    this.workedAtCompanies$ = this.portfolioService.workedAtCompanies$;
    this.bio$ = this.portfolioService.bio$;
    this.skillsets$ = this.portfolioService.skillsets$;
    this.recommendations$ = this.portfolioService.recommendations$;
    this.professionalExperiencesTimeline$ =
      this.portfolioService.professionalExperiencesTimeline$;
  }
}
