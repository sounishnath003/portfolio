import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <div>
      <app-add-route-button
        routeToLink="/cms/dashboard/skills/add"
      ></app-add-route-button>

      <app-customtable></app-customtable>
    </div>
  `,
  styles: [],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
