import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="w-full flex my-16 flex-col md:flex-row justify-between items-center flex-1">
      <div routerLink="/" class="m-auto cursor-pointer hover:shadow-xl rounded-full">
        <img src="https://avatars.githubusercontent.com/u/40270033?v=4" alt="logo"
             class="w-20 h-20 rounded-full shadow-xl border-4 border-white ring-2 ring-blue-700 ">
      </div>
      <div class="m-auto my-6 flex text-md uppercase font-semibold text-gray-800 space-x-8 items-center">
        <div routerLink="/projects" [routerLinkActive]="'shadow bg-gray-50 border border-gray-700 text-blue-600 p-2 rounded-lg'"
             class="m-auto cursor-pointer hover:text-blue-500">projects
        </div>
        <div routerLink="/blogs" [routerLinkActive]="'shadow border border-gray-700 text-blue-600 p-2 rounded-lg'"
             class="m-auto cursor-pointer hover:text-blue-500">blogs
        </div>
        <div routerLink="/about" [routerLinkActive]="'shadow border border-gray-700 text-blue-600 p-2 rounded-lg'"
             class="m-auto cursor-pointer hover:text-blue-500">about
        </div>
        <div routerLink="/contact" [routerLinkActive]="'shadow border border-gray-700 text-blue-600 p-2 rounded-lg'"
             class="m-auto cursor-pointer hover:text-blue-500">catch me
        </div>
      </div>
    </div>
  `,
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
