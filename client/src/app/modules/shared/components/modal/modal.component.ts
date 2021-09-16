import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `<div
      *ngIf="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="relative w-auto my-6 mx-auto max-w-md">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <!--body-->
          <section class="relative p-6 flex-auto">
            <p
              class="my-4 bg-red-50 rounded-lg p-3 font-semibold text-red-500 text-lg leading-relaxed"
            >
              Are you sure want to delete skills?
              <br />
              <span class="text-xs"
                >Note: This process cannot be undone!. Make sure what to
                do.</span
              >
            </p>
          </section>
          <!--footer-->
          <footer
            class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"
          >
            <button
              class="text-red-500 hover:bg-red-100 background-transparent font-bold uppercase px-6 py-3 rounded-lg text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              (click)="onCancel()"
            >
              Close
            </button>
            <button
              class="bg-red-500 items-center flex space-x-3 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              (click)="onSave()"
            >
              <div>
                <img
                  src="assets/delete.svg"
                  alt="delete.icon"
                  class="w-5 h-5"
                />
              </div>
              <div>Delete</div>
            </button>
          </footer>
        </div>
      </div>
    </div>
    <div
      *ngIf="showModal"
      class="opacity-25 fixed inset-0 z-40 bg-black"
    ></div>`,
  styles: [],
})
export class ModalComponent implements OnInit {
  @Input() showModal: boolean = false;
  @Output() onSaveEventEmitted = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSave() {
    this.onSaveEventEmitted.next(true);
  }

  onCancel() {
    this.onSaveEventEmitted.emit(false);
  }
}
