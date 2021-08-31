import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  template: `
    <div
      *ngIf="project; else temp"
      class="max-w-md cursor-pointer font-semibold mx-auto rounded-xl overflow-hidden md:max-w-2xl"
    >
      <div class="md:flex">
        <div class="md:flex-shrink-0 text-center">
          <img
            class="m-4 object-cover w-20"
            [src]="project.logo"
            loading="lazy"
            alt="Man looking at item at a store"
          />
        </div>
        <div class="p-8">
          <div class="tracking-wide text-sm text-indigo-500 font-semibold">
            {{ project.tags }}
          </div>
          <p class="mt-2 text-gray-500">{{ project.description }}</p>
          <div
            class="my-4 hover:text-blue-800 inline-flex rounded cursor-pointer"
          >
            View more &rarr;
          </div>
        </div>
      </div>
    </div>
    <ng-template #temp> No Content</ng-template>
  `,
  styles: [],
})
export class ProjectCardComponent implements OnInit {
  @Input() project: {
    tags: string[];
    projectType: string;
    description: string;
    logo: string;
  } | null = null;

  constructor() {}

  ngOnInit(): void {}
}
