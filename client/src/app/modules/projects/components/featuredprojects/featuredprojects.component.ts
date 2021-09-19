import { Component, OnInit } from '@angular/core';
import { ProjectInterface, ProjectService } from 'src/app/modules/shared';

@Component({
  selector: 'app-featuredprojects',
  template: `
    <div
      class="text-2xl hover:text-blue-700 cursor-pointer inline-flex space-x-3 font-semibold"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="blue"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M3 3v18h18" />
          <path d="m18.7 8-5.1 5.2-2.8-2.7L7 14.3" />
        </svg>
      </div>
      <a href="#github-projects">Most Featured Projects</a>
    </div>
    <div class="card-list">
      <article class="card" *ngFor="let project of projects as list">
        <header class="card-header">
          <div>
            <span class="author-name-prefix" style="margin-right: 5px;"
              >Article:
            </span>
            <div class="text-sm text-gray-400 leading-relaxed">
              {{ project.summary }}
            </div>
          </div>
          <h2 class="text-xl my-1 font-sans">{{ project.title }}</h2>
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
  styleUrls: ['./featureProjects-style.css'],
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