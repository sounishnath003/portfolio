import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeaturedProject, PortfolioApiService } from '../../../../services/portfolio-api.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { GithubProjectsComponent } from "../github-projects/github-projects.component";
import { FeaturedProjectsComponent } from "../featured-projects/featured-projects.component";
import { GithubUserProject } from '../../../../services/github.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [DatePipe, RouterLink, AsyncPipe, FormsModule, NgIf, GithubProjectsComponent, FeaturedProjectsComponent],
  providers: [PortfolioApiService],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  selection: string = 'Github';

  featuredProjects$: Observable<FeaturedProject[]> = this.portfolioService.featuredProjects$
  githubProjects$: Observable<GithubUserProject[]> = this.portfolioService.getGithubProjects$;


  constructor(private readonly portfolioService: PortfolioApiService) { }

  getSlugUrl(project: FeaturedProject) {
    return `/projects/${project.slugName}`;
  }

}
