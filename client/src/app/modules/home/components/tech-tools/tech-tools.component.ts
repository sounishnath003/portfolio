import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tech-tools',
  template: `
    <div>
      <div class="text-3xl my-4 font-semibold"> Things I&apos;m good at &rarr;</div>
      <div class="my-6 parent">
        <app-project-card *ngFor="let project of projects" [project]="project"></app-project-card>
      </div>
    </div>
  `,
  styles: [
    `.parent {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 10px;
    }`,
    `.clip {
      padding: 10px;
    }`,
    `.clip:hover {
      clip-path: circle(30%);
    }`
  ]
})
export class TechToolsComponent implements OnInit {

  projects = [
    {
      tags: ['#angular', '#typescript'],
      projectType: 'Angular',
      logo: 'https://sounishnath.netlify.app/assets/ng-logo.png',
      description: `Angular is a platform for building mobile and desktop web
            applications. Join the community of millions of developers who build compelling user interfaces with`
    },
    {
      tags: ['#databases', '#sql'],
      projectType: 'PostgreSQL',
      logo: 'https://sounishnath.netlify.app/assets/psql.png',
      description: `PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.`
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
