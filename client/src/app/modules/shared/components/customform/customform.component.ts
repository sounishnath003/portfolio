import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

type InputType = 'text' | 'url' | 'email' | 'textarea';

export interface CustomFormInterface {
  labelText: string;
  type: InputType;
  fieldControlName: string;
  placeholderText: string;
}

@Component({
  selector: 'app-customform',
  template: `
    <div class="font-semibold text-gray-800">
      <div class="text-2xl text-blue-600">{{ formTitle }}</div>
      <div class="my-4">
        <form [formGroup]="formGroupContext" (ngSubmit)="onSubmit()">
          <div *ngFor="let content of customFormContext">
            <div *ngIf="get_status(content.type)">
              <div class="flex flex-col space-y-3">
                <label [for]="content.fieldControlName"
                  >{{ content.labelText }}:
                </label>
                <input
                  required
                  [type]="content.type"
                  [name]="content.fieldControlName"
                  [id]="content.fieldControlName"
                  [formControlName]="content.fieldControlName"
                  class="py-2 px-4 rounded bg-gray-50 border outline-none border-gray-600"
                  [placeholder]="content.placeholderText"
                />
              </div>
            </div>
            <div *ngIf="!get_status(content.type)">
              <div class="flex flex-col space-y-3 my-3">
                <label [for]="content.fieldControlName"
                  >{{ content.labelText }}
                </label>
                <textarea
                  required
                  rows="5"
                  type="text"
                  [name]="content.fieldControlName"
                  [id]="content.fieldControlName"
                  [formControlName]="content.fieldControlName"
                  class="py-2 px-4 rounded bg-gray-50 border outline-none border-gray-600"
                  [placeholder]="content.placeholderText"
                ></textarea>
              </div>
            </div>
          </div>
          <button
            type="submit"
            value="Save"
            class="my-4 float-right px-8 py-2 tracking-wide rounded bg-blue-600 text-white"
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [],
})
export class CustomformComponent implements OnInit {
  buttonText: string = 'Publish';

  @Input() formTitle!: string;
  @Input() formGroupContext!: FormGroup;
  @Input() customFormContext!: Array<CustomFormInterface>;

  @Output() onSubmitEmitter: EventEmitter<HTMLFormElement> =
    new EventEmitter<HTMLFormElement>();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.onSubmitEmitter.emit(this.formGroupContext.value);
  }

  get_status(type: string): boolean {
    return type === 'text' ? true : false;
  }
}
