import { Component } from '@angular/core';
import { GetInTouchComponent } from '../../components/get-in-touch/get-in-touch.component';
import { PortfolioApiService } from '../../services/portfolio-api.service';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { GithubUserProject } from '../../services/github.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, GetInTouchComponent],
  providers: [PortfolioApiService],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  githubProjects$: Observable<GithubUserProject[]> =
    this.portfolioApiService.getGithubProjects$;

  constructor(private readonly portfolioApiService: PortfolioApiService) {}
}
