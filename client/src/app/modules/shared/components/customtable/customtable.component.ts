import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customtable',
  template: `
    <div
      class="w-full rounded-lg shadow-lg border-gray-600 px-4 md:px-10 pt-4 md:pt-7 pb-5 border whitespace-pre-wrap overflow-y-hidden"
    >
      <table
        class="table able-fixed h-10"
        *ngIf="loadData.length; else noContentTemplate"
      >
        <thead>
          <tr
            class="h-16 font-semibold w-full text-sm leading-none text-gray-800"
          >
            <th
              class="text-left pl-4"
              scope="col"
              *ngFor="let header of this.tableHeaders"
            >
              {{ header | titlecase }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="h-32 cursor-pointer text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
            *ngFor="let project of loadData"
          >
            <td *ngFor="let _ of tableHeaders; let idx = index">
              <ng-container
                *ngIf="isImageType(tableHeaders[idx]); else tempBlock"
              >
                <img
                  [src]="project[tableHeaders[idx]]"
                  class="rounded-full ring-2 ring-blue-600 shadow w-10 h-10"
                  [alt]="project.title"
                />
              </ng-container>
              <ng-template #tempBlock>
                <ng-container
                  *ngIf="tableHeaders[idx] !== 'actions'; else actionBlock"
                >
                  <div class="whitespace-pre-wrap leading-relaxed">
                    {{ project[tableHeaders[idx]] }}
                  </div>
                </ng-container>
                <ng-template #actionBlock>
                  <div class="flex flex-row space-x-4">
                    <div (click)="onEditFired.emit(project)">
                      <img
                        src="assets/edit.svg"
                        alt="edit-icon"
                        class="w-4 h-4"
                      />
                    </div>
                    <div
                      (click)="onDel(project[this.uniqueIdentifierProperty])"
                    >
                      <img
                        src="assets/trash.svg"
                        alt="trash-icon"
                        class="w-4 h-4"
                      />
                    </div>
                  </div>
                </ng-template>
              </ng-template>
            </td>
          </tr>
        </tbody>
      </table>
      <ng-template #noContentTemplate>
        <div class="text-red-500 bg-red-100 flex p-2 rounded-lg">
          <div class="m-3 text-center">
            No records are created. To view the dashboard, add some new records
            to make the content available!
          </div>
        </div>
      </ng-template>
    </div>
    <app-modal
      [showModal]="showModal"
      message="Are you sure want to delete?"
      (onSaveEventEmitted)="onEventCaptured($event)"
    ></app-modal>
  `,
  styleUrls: ['./customtable.component.css'],
})
export class CustomtableComponent implements OnInit {
  showModal: boolean = false;
  @Input() tableHeaders: Array<string> = [];
  @Input() loadData: any[] = [];
  @Input() uniqueIdentifierProperty: string = '';
  @Output() onEditFired: EventEmitter<HTMLDivElement> =
    new EventEmitter<HTMLDivElement>();
  @Output() onDeleteFired: EventEmitter<HTMLDivElement> =
    new EventEmitter<HTMLDivElement>();

  itemToDelete: any = '';

  constructor() {}

  ngOnInit(): void {}

  extractKeysFromData(): Array<string> {
    return this.loadData.length ? Object.keys(this.loadData[0]) : [];
  }

  isImageType(key: string): boolean {
    return key === 'photo' || key === 'logo' || key === 'image';
  }

  onDel(id: any) {
    this.showModal = true;
    this.itemToDelete = id;
  }

  onEventCaptured($event: any) {
    this.showModal = false;
    if ($event === true) {
      this.onDeleteFired.emit(this.itemToDelete);
    }
  }
}
