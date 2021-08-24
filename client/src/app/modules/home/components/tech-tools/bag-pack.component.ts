import {Component, OnInit} from '@angular/core';

type PackTool = {
  logo: string;
  name: string;
};

@Component({
  selector: 'app-bag-pack',
  template: `
    <div class="m-auto p-4 rounded">
      <div
        class="text-3xl text-center font-semibold text-gray-800 hover:text-blue-700 cursor-pointer"
      >
        Tooling &amp; Ecosystems
      </div>

      <div>
        <div
          class="flex overflow-auto py-0.5 pl-0.5 my-8 -mx-4 sm:-mx-6 md:-mx-8 xl:-ml-4 xl:mr-0"
        >
          <ul
            class="whitespace-nowrap mx-auto xl:mx-0 px-4 sm:px-6 md:px-8 xl:px-0 grid gap-2 sm:gap-12"
            style="grid-template-columns:repeat(6, minmax(0, 1fr))"
          >
            <app-tech-card
              *ngFor="let pack of toolingPacks"
              [pack]="pack"
            ></app-tech-card>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class BagPackComponent implements OnInit {
  toolingPacks: Array<PackTool> = [
    {logo: 'assets/react.svg', name: 'React'},
    {logo: 'assets/angular.svg', name: 'Angular'},
    {logo: 'assets/typescript.svg', name: 'TypeScript'},
    {logo: 'assets/azure.svg', name: 'Azure'},
    {logo: 'assets/mysql.svg', name: 'MySQL'},
    {logo: 'assets/nodejs.svg', name: 'Node JS'},
    {logo: 'assets/java.svg', name: 'Java'},
    {logo: 'assets/golang.svg', name: 'Go lang'},
    {logo: 'assets/rails.svg', name: 'Ruby on Rails'},
    {logo: 'assets/flutter.svg', name: 'Flutter'},
    {logo: 'assets/bigdata.png', name: 'Big Data'},
    {logo: 'assets/docker.svg', name: 'Docker'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
