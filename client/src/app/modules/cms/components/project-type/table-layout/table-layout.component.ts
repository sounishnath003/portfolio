import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-layout',
  template: `
    <div>
      <table class="table table-fixed h-10 overflow-y-scroll">
        <thead>
          <tr>
            <th scope="col">ProjectType</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let project of projectTypes">
            <td>{{ project.projectType }}</td>
            <td class="max-w-sm">{{ project.description }}</td>
            <td>{{ project.tags }}</td>
            <td (click)="onEdit(project)">Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
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
  @Output() onEditEventFired: EventEmitter<HTMLDataElement> =
    new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onEdit(project: any) {
    this.onEditEventFired.emit(project);
  }
}
