import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timelinetableview',
  template: `
    <app-customtable
      [tableHeaders]="['photo', 'title', 'summary', 'actions']"
      [uniqueIdentifierProperty]="'_id'"
      (onEditFired)="onEdit($event)"
      (onDeleteFired)="onDelete($event)"
      [loadData]="timelines"
    ></app-customtable>
  `,
  styles: [],
})
export class TimelinetableviewComponent implements OnInit {
  timelines: Array<any> = [];
  constructor() {}

  ngOnInit(): void {}

  onEdit(id: any) {}
  onDelete(id: any) {}
}
