import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/modules/shared';

@Component({
  selector: 'app-projects',
  template: `
    <div>
      <app-add-route-button
        routeToLink="/cms/dashboard/projects/add"
      ></app-add-route-button>
      <div>
        <app-tableview></app-tableview>
      </div>
    </div>
  `,
  providers: [ProjectService],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
