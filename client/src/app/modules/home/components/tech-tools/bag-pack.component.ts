import { Component, OnInit } from '@angular/core';

type PackTool = {
  logo: string;
  name: string;
};

@Component({
  selector: 'app-bag-pack',
  template: `
    <div class="m-auto p-4 rounded">
      <div class="text-3xl text-center font-semibold text-gray-800">
        Toolings &amp; Ecosystems
      </div>

      <div>
        <div
          class="flex overflow-auto py-0.5 pl-0.5 my-6 -mx-4 sm:-mx-6 md:-mx-8 xl:-ml-4 xl:mr-0"
        >
          <ul
            class="whitespace-nowrap mx-auto xl:mx-0 px-4 sm:px-6 md:px-8 xl:px-0 grid gap-2 sm:gap-12"
            style="grid-template-columns:repeat(6, minmax(0, 1fr))"
          >
            <li class="relative" *ngFor="let pack of toolingPacks">
              <div style="border-radius:12px" class="absolute inset-0"></div>
              <button
                type="button"
                class="block hover:bg-gray-100 w-full relative z-10 px-4 py-1 leading-6 sm:text-xl font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-xl text-gray-900"
              >
                <div class="flex flex-col items-center py-1">
                  <img [src]="pack.logo" [alt]="pack.name" /> {{ pack.name }}
                </div>
              </button>
            </li>
          </ul>
        </div>

        <!-- end -->
      </div>
    </div>
  `,
  styles: [],
})
export class BagPackComponent implements OnInit {
  toolingPacks: Array<PackTool> = [
    { logo: 'assets/react.svg', name: 'React' },
    { logo: 'assets/angular.svg', name: 'Angular' },
    { logo: 'assets/typescript.svg', name: 'TypeScript' },
    { logo: 'assets/azure.svg', name: 'Azure' },
    { logo: 'assets/mysql.svg', name: 'MySQL' },
    { logo: 'assets/nodejs.svg', name: 'Node JS' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
