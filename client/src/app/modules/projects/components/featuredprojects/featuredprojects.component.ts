import { Component, OnInit } from '@angular/core';
import { ProjectInterface, ProjectService } from 'src/app/modules/shared';

@Component({
  selector: 'app-featuredprojects',
  template: `
  <div class="text-2xl font-semibold">Most Featured Projects</div>
    <div class="card-list">
      <article
        class="card"
        *ngFor="let project of [1, 1, 1, 1, 1, 1, 1, 1, 1] as list"
      >
        <header class="card-header">
          <div>
            <span class="author-name-prefix" style="margin-right: 5px;"
              >Article:
            </span>
            18th Sept, 2021
          </div>
          <h2 class="text-xl font-sans">Project Title</h2>
        </header>

        <section class="card-author">
          <a href="#" class="author-avatar">
            <img src="https://avatars.githubusercontent.com/u/40270033?v=4" />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Author</div>
            Sounish
          </div>
        </section>

        <section>
          <div class="tags">
            <span>html</span>
            <span>css</span>
            <span>javascript</span>
          </div>
        </section>
      </article>
    </div>
  `,
  styleUrls: ['featureProjects-style.css'],
  providers: [ProjectService],
})
export class FeaturedprojectsComponent implements OnInit {
  projects: Array<ProjectInterface> = [];
  constructor(private readonly projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe((resp) => {
      this.projects = resp.data;
    });
  }
}
