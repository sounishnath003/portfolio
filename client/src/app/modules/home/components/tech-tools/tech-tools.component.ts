import { Component, OnInit } from '@angular/core';
import { ProjectTypeService } from 'src/app/modules/global-services/project-type.service';

@Component({
  selector: 'app-tech-tools',
  template: `
    <div>
      <div class="text-3xl my-4 font-semibold">
        Things I&apos;m good at &rarr;
      </div>
      <div class="my-6 grid md:grid-cols-2 sm:grid-cols-1 gap-3">
        <app-project-card
          *ngFor="let project of projects"
          [project]="project"
        ></app-project-card>
      </div>
    </div>
  `,
  styles: [
    `
      .parent {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
      }
    `,
    `
      .clip {
        padding: 10px;
      }
    `,
    `
      .clip:hover {
        clip-path: circle(30%);
      }
    `,
  ],
  providers: [ProjectTypeService],
})
export class TechToolsComponent implements OnInit {
  projects = [];

  constructor(private readonly projectService: ProjectTypeService) {}

  ngOnInit(): void {
    this.projectService.getAllProjectTypes().subscribe((resp: any) => {
      this.projects = resp.data;
    });

    console.log(this.projects);

  }
}