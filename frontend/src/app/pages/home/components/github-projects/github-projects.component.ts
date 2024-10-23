import { Component, Input } from '@angular/core';
import { FeaturedProject, PortfolioApiService } from '../../../../services/portfolio-api.service';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, JsonPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GithubUserProject } from '../../../../services/github.model';

@Component({
  selector: 'app-github-projects',
  standalone: true,
  imports: [AsyncPipe, DatePipe, JsonPipe, NgIf],
  templateUrl: './github-projects.component.html',
  styleUrl: './github-projects.component.css'
})
export class GithubProjectsComponent {
  @Input() githubProjects$!: Observable<GithubUserProject[]>;
}
