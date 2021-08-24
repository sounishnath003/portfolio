import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <div>
      <div class="text-2xl font-semibold text-blue-700">Projects Manager</div>
      <div class="grid grid-cols-2 gap-2">
        <app-addform></app-addform>
        <app-tableview></app-tableview>
      </div>
    </div>
  `,
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
