import {Component, OnInit} from '@angular/core';

type NavLink = { routeTo: string, linkName: string };

@Component({
  selector: 'app-header',
  template: `
    <div class="mb-6">
      <div class="p-4 rounded mx-auto">
        <div class="text-2xl text-center font-semibold text-blue-600"> CMS Dashboard Manager</div>
        <nav class=" flex my-4 flex-wrap flex-row justify-center items-center space-x-10">
          <div *ngFor="let link of links" class="cursor-pointer" [routerLink]="link.routeTo"
               routerLinkActive="bg-gray-50 font-semibold p-2 rounded text-blue-700"> {{link.linkName}} </div>
        </nav>
      </div>
    </div>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  links: Array<NavLink> = [
    {routeTo: "/cms/dashboard/project-type", linkName: 'Project Type'},
    {routeTo: "/cms/dashboard/projects", linkName: 'Projects'},
    {routeTo: "/cms/dashboard/blogs", linkName: 'Blogs'},
    {routeTo: "/cms/dashboard/blogs", linkName: 'Contacts'},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
