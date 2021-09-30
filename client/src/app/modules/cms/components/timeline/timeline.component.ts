import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  template: `
    <div>
      <app-add-route-button
        routeToLink="/cms/dashboard/timelines/add"
      ></app-add-route-button>
      <app-timelinetableview></app-timelinetableview>
    </div>
  `,
  styles: [],
})
export class TimelineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
