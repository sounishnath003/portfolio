import { AsyncPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeaturedProject, PortfolioApiService } from '../../../../services/portfolio-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [DatePipe, RouterLink, AsyncPipe],
  providers: [PortfolioApiService],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  featuredProjects$: Observable<FeaturedProject[]> = this.portfolioService.featuredProjects$
  constructor(private readonly portfolioService: PortfolioApiService) { }


  getSlugUrl(project: FeaturedProject) {
    return `/projects/${project.slugName}`;
  }
}
