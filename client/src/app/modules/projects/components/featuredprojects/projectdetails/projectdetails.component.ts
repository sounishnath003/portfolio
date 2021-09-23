import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectInterface, ProjectService } from 'src/app/modules/shared';

@Component({
  selector: 'app-projectdetails',
  template: `
    <div
      [routerLink]="gotoPrevRoute()"
      class="my-3 p-4 flex flex-row cursor-pointer font-semibold hover:text-blue-600 justify-start items-start space-x-4"
    >
      <div>&larr;</div>
      <div>All projects</div>
    </div>
    <div class="p-2" *ngIf="project; else temp">
      <div class="text-2xl md:text-4xl">{{ project.title }}</div>
      <blockquote class="my leading-relaxed text-gray-600">
        ~ {{ project.summary }}
      </blockquote>

      <div class="my-16">
        <div
          class="leading-relaxed p-2 md:text-xl"
          [outerHTML]="project.description | markdownToHtml"
        ></div>
      </div>
    </div>
    <ng-template #temp>No Content</ng-template>
  `,
  styles: [
    `
      ul {
        font-size: 2rem;
        background-color: red;
      }
    `,
  ],
  providers: [ProjectService],
})
export class ProjectdetailsComponent implements OnInit {
  project!: ProjectInterface;

  constructor(
    private readonly route: ActivatedRoute,
    private router: Router,
    private readonly projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.loadPayloadRecieved();
  }

  private loadPayloadRecieved() {
    const { id = '', projectName = '' } = this.route.snapshot.params;
    this.projectService.getProjectById(id).subscribe((resp) => {
      this.project = resp.data;
    });
  }

  gotoPrevRoute() {
    return this.router.createUrlTree(['/projects']).toString();
  }
}
