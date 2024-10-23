import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FeaturedProject } from '../../../../services/portfolio-api.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [AsyncPipe, DatePipe, RouterLink],
  templateUrl: './featured-projects.component.html',
  styleUrl: './featured-projects.component.css'
})
export class FeaturedProjectsComponent {

  @Input() featuredProjects$!: Observable<FeaturedProject[]>;

  getSlugUrl(project: FeaturedProject) {
    return `/projects/${project.slugName}`;
  }
}
