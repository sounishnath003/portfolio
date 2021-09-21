import { Component, Input, OnInit } from '@angular/core';
import {
  RepositoryInterface,
  ServiceUtility,
} from 'src/app/modules/shared/services/utils';

@Component({
  selector: 'app-gitprojectcard',
  template: `
    <section
      class="container min-h-50 flex flex-wrap flex-col space-y-4 border border-gray-800 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
    >
      <!-- [style.background]="randomColor" -->
      <header class="w-full p-3">
        <div>Language: {{ repository.language }}</div>
      </header>
      <main class="font-semibold p-3 text-gray-800">
        <div
          class="flex flex-wrap items-start justify-start flex-col space-y-2"
        >
          <div class="text-2xl">{{ repository.name }}</div>
          <div class="leading-relaxed text-sm">
            {{ repository.description }}
          </div>
          <div class="flex flex-row space-x-3 justify-start items-start">
            <div class="px-4 py-1 rounded" [style.background]="randomColor1">
              forks: {{ repository.forks }}
            </div>
            <div class="px-4 py-1 rounded" [style.background]="randomColor2">
              issues: {{ repository.open_issues }}
            </div>
            <div class="px-4 py-1 rounded" [style.background]="randomColor3">
              watchers: {{ repository.watchers }}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div class="bg-gray-50 p-3 rounded-lg">
          <div class="my-2 grid grid-cols-8 gap-2">
            <div class="">
              <img
                [src]="repository.owner.avatar_url"
                class="rounded-full w-8 h-8 shadow ring-2 ring-blue-700"
              />
            </div>
            <div class="col-span-6">
              <div
                class="flex text-sm font-semibold flex-col space-y-2 items-start justify-start"
              >
                <div class="text-blue-700 flex space-x-1">
                  <div>
                    <img class=" " alt="href.icon.svg" src="assets/live.svg" />
                  </div>
                  <div>
                    <a [href]="repository.html_url" target="blank">{{
                      repository.full_name
                    }}</a>
                  </div>
                </div>
                <div>{{ repository.created_at | date }}</div>
              </div>
            </div>
            <div *ngIf="repository.homepage">
              <a [href]="repository.homepage" target="blank"
                ><img src="assets/href.svg" class="w-5 h-5"
              /></a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  `,
  styleUrls: ['./gitprojectcard.component.css'],
})
export class GitprojectcardComponent implements OnInit {
  @Input()
  repository!: RepositoryInterface;
  randomColor1: string = '';
  randomColor2: string = '';
  randomColor3: string = '';
  formatedDate: any = '';

  constructor() {}

  ngOnInit(): void {
    this.randomColor1 = ServiceUtility.generateRandomHexColor();
    this.randomColor2 = ServiceUtility.generateRandomHexColor();
    this.randomColor3 = ServiceUtility.generateRandomHexColor();
    // this.formatedDate = this.repository.created_at.toDateString();
  }
}
