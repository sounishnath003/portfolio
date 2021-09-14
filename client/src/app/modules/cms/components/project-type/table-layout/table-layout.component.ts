import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-table-layout',
  template: `
    <app-customtable
      [tableHeaders]="['projectType', 'description', 'tags', 'actions']"
      [uniqueIdentifierProperty]="'_id'"
      [loadData]="projectTypes"
      (onEditFired)="onEdit($event)"
      (onDeleteFired)="onDelete($event)"
    ></app-customtable>
  `,
  styles: [
    `
      table,
      th,
      td {
        border: '1px solid black';
      }
    `,
  ],
})
export class TableLayoutComponent implements OnInit {
  @Input() projectTypes: any[] = [];
  @Output() onDeleteEventFired: EventEmitter<string> =
    new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onEdit(project: any) {
    this.router.navigate(['cms', 'dashboard', 'project-type', 'edit'], {state: project});
  }

  onDelete(projectId: any) {
    this.onDeleteEventFired.emit(projectId);
  }
}
