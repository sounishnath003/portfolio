import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-table-layout',
  template: `
    <div
      class="w-full rounded-lg shadow-lg border-gray-600 px-4 md:px-10 pt-4 md:pt-7 pb-5 border whitespace-pre-wrap overflow-y-hidden"
    >
      <table class="table able-fixed h-10">
        <thead>
          <tr
            class="h-16 font-semibold w-full text-sm leading-none text-gray-800"
          >
            <th class="text-left pl-4" scope="col">ProjectType</th>
            <th class="text-left pl-4">Description</th>
            <th class="text-left pl-4">Tags</th>
            <th class="text-left pl-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="h-32 cursor-pointer text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
            *ngFor="let project of projectTypes"
          >
            <td class="text-blue-600 font-semibold">
              {{ project.projectType }}
            </td>
            <td class="whitespace-pre-wrap leading-relaxed">
              {{ project.description }}
            </td>
            <td class="leading-relaxed">{{ project.tags }}</td>
            <td>
              <div class="flex flex-row space-x-4">
                <div (click)="onEdit(project)">
                  <img src="assets/edit.svg" alt="edit-icon" class="w-4 h-4" />
                </div>
                <div (click)="onDelete(project._id)">
                  <img
                    src="assets/trash.svg"
                    alt="trash-icon"
                    class="w-4 h-4"
                  />
                </div>
              </div>
            </td>
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
  @Output() onDeleteEventFired: EventEmitter<string> =
    new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onEdit(project: any) {
    this.router.navigate(['cms', 'dashboard', 'project-type', 'edit'], {state: project});
  }

  onDelete(projectId: string) {
    this.onDeleteEventFired.emit(projectId);
  }
}
