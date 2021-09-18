import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <div>
      <app-herobanner
        title="It's time to discover projects"
        subtitle="Things I've build over time, whenever came across new
                learning & stuffs. I've build generally through web technologies such as Angular, React, Node, TypeScript, NestJS, Heroku, Lamda etc. Hope you will enjoy."
      ></app-herobanner>
      <app-featuredprojects></app-featuredprojects>
      <div>projects home</div>
    </div>
  `,
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
