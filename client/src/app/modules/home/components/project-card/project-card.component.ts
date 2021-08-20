import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-card',
  template: `
    <div
      *ngIf="project; else temp"
      class="flex border-2 hover:shadow-lg hover:bg-indigo-100 border-blue-700 rounded-lg p-8 duration-75 hover:bg-gray-50- cursor-pointer font-semibold flex-col justify-start items-start space-y-5">
      <div class="mb-2 mr-0">
        <div class="bg-gray-100 text-gray-600 px-4 rounded"> {{project.tags}} </div>
      </div>
      <div class="p-3 rounded-full bg-gray-50">
        <img [src]="project.logo" alt="ror-logo" class="w-16 h-16 rounded-full">
      </div>
      <div class="uppercase text-xl text-blue-600"> {{project.projectType}} </div>
      <div class="leading-relaxed text-gray-800 flex flex-wrap">
        {{project.description}}
      </div>
    </div>
    <ng-template #temp> No Content</ng-template>
  `,
  styles: []
})
export class ProjectCardComponent implements OnInit {
  @Input() project: { tags: string[], projectType: string, description: string, logo: string } | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
