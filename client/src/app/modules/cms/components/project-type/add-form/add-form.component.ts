import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-form',
  template: `
    <div>
      <div *ngIf="!projectToEdit; else showEdit" class="my-6 font-semibold text-gray-800">
        <form [formGroup]="form" (ngSubmit)="onSubmitClicked()">
          <div class="my-3 flex flex-col space-y-2">
            <label for="projectType" class="">Project Type: </label>
            <div>
              <input
                formControlName="projectType"
                class="px-8 py-2 rounded border"
                type="text"
                name="projectType"
                id="projectType"
                placeholder="Distributed Systems"
              />
            </div>
          </div>
          <div class="my-3 flex flex-col space-y-2">
            <label for="logo" class="">Logo: </label>
            <div>
              <input
                formControlName="logo"
                class="px-8 py-2 rounded border"
                type="text"
                name="logo"
                id="logo"
                placeholder="react.jpeg"
              />
            </div>
          </div>
          <div class="my-3 flex flex-col space-y-2">
            <label for="description" class="">Description: </label>
            <div>
              <textarea
                formControlName="description"
                class="px-8 py-2 rounded border"
                type="text"
                name="description"
                id="description"
                placeholder="write about the project..."
              ></textarea>
            </div>
          </div>
          <div class="my-3 flex flex-col space-y-2">
            <label for="tags" class="">Tags: </label>
            <div>
              <input
                formControlName="tags"
                class="px-8 py-2 rounded border"
                type="text"
                name="tags"
                id="tags"
                placeholder="#reactjs, #openSource"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Save"
            class="px-6 py-2 rounded bg-blue-700 text-white"
          />
        </form>
      </div>
      <ng-template #showEdit>
        <div>
          <form [formGroup]="form" (ngSubmit)="onEditClicked()">
            <div class="my-3 flex flex-col space-y-2">
              <label for="projectType" class="">Project Type: </label>
              <div>
                <input
                  formControlName="projectType"
                  class="px-8 py-2 rounded border"
                  type="text"
                  name="projectType"
                  id="projectType"
                  [value]="projectToEdit.projectType"
                  placeholder="Distributed Systems"
                />
              </div>
            </div>
            <div class="my-3 flex flex-col space-y-2">
              <label for="logo" class="">Logo: </label>
              <div>
                <input
                  formControlName="logo"
                  class="px-8 py-2 rounded border"
                  type="text"
                  name="logo"
                  id="logo"
                  [value]="projectToEdit.logo"
                  placeholder="react.jpeg"
                />
              </div>
            </div>
            <div class="my-3 flex flex-col space-y-2">
              <label for="description" class="">Description: </label>
              <div>
              <textarea
                formControlName="description"
                class="px-8 py-2 rounded border"
                type="text"
                name="description"
                id="description"
                [value]="projectToEdit.description"
                placeholder="write about the project..."
              ></textarea>
              </div>
            </div>
            <div class="my-3 flex flex-col space-y-2">
              <label for="tags" class="">Tags: </label>
              <div>
                <input
                  formControlName="tags"
                  class="px-8 py-2 rounded border"
                  type="text"
                  name="tags"
                  id="tags"
                  [value]="projectToEdit.tags"
                  placeholder="#reactjs, #openSource"
                />
              </div>
            </div>
            <input
              type="submit"
              value="Save"
              class="px-6 py-2 rounded bg-blue-700 text-white"
            />
          </form>
        </div>
      </ng-template>
    </div>
  `,
  styles: []
})
export class AddFormComponent implements OnInit {
  @Input() projectToEdit: any | null = null;
  @Output() onSubmitEventFired: EventEmitter<HTMLButtonElement> = new EventEmitter<HTMLButtonElement>();
  @Output() onEditEventFired: EventEmitter<HTMLButtonElement> = new EventEmitter<HTMLButtonElement>();

  form: FormGroup = new FormGroup({
    _id: new FormControl(''),
    __v: new FormControl(''),
    projectType: new FormControl('', {validators: [Validators.required]}),
    tags: new FormControl('', {validators: [Validators.required]}),
    logo: new FormControl('', {validators: [Validators.required]}),
    description: new FormControl('', {validators: [Validators.required]}),
  });


  constructor() {
  }

  ngOnInit(): void {
    if (this.projectToEdit !== null) {
      this.form.setValue({...this.form.value, ...this.projectToEdit});
      console.log(this.form.value)
    }
  }

  onSubmitClicked() {
    this.onSubmitEventFired.emit(this.form.value);
    this.form.reset();
  }

  onEditClicked() {
    this.onEditEventFired.emit(this.form.value);
    this.form.reset();
  }
}
