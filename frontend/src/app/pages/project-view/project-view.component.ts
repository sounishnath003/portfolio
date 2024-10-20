import { Component, OnInit } from '@angular/core';
import { FeaturedProject, PortfolioApiService } from '../../services/portfolio-api.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CommonModule, JsonPipe, NgIf } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [CommonModule, AsyncPipe, JsonPipe, NgIf, PageNotFoundComponent],
  providers: [PortfolioApiService],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.css'
})
export class ProjectViewComponent implements OnInit {
  project$: BehaviorSubject<FeaturedProject> = new BehaviorSubject<FeaturedProject>({} as FeaturedProject);
  constructor(private readonly portfolioService: PortfolioApiService, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    const { slugName } = this.route.snapshot.params;
    this.portfolioService.getFeaturedProjectBySlug(slugName).subscribe(
      project => this.project$.next(project)
    )
  };
}
