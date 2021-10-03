import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TimelineDTO } from '../../services/timeline.service';

type PayloadInterface<T> = T;
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
    <div class="font-semibold text-gray-800" *ngIf="!isLoading; else temp">
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
            [disabled]="isClicked"
            type="submit"
            value="Save"
            class="my-4 float-right px-8 py-2 tracking-wide rounded bg-blue-600 text-white"
          >
            {{ buttonText }}
          </button>
        </form>
      </div>
    </div>
    <ng-template #temp>
      <div class="text-blue-600">Loading Data...</div>
    </ng-template>
  `,
  styles: [],
})
export class CustomformComponent implements OnInit {
  buttonText: string = 'Publish';
  routeType: string = '';
  isClicked: boolean = false;
  isLoading: boolean = true;

  @Input() formTitle!: string;
  @Input() formGroupContext!: FormGroup;
  @Input() customFormContext!: Array<CustomFormInterface>;

  @Output() onSubmitEmitter: EventEmitter<{
    type: string;
    payload: PayloadInterface<TimelineDTO>;
  }> = new EventEmitter<{
    type: string;
    payload: PayloadInterface<TimelineDTO>;
  }>();

  constructor(private router: Router) {
    this.preloadUrlPayloadCheck();
  }

  private preloadUrlPayloadCheck() {
    this.routeType = this.router.url.split('/')[4];
    if (this.routeType === 'add') this.isLoading = false;
    else {
      const state: any = this.router.getCurrentNavigation()?.extras.state;
      delete state['__v'];
      delete state['createdAt'];
      delete state['updatedAt'];
      setTimeout(() => {
        this.formGroupContext.setValue({
          ...this.formGroupContext.value,
          ...state,
        });
        this.isLoading = false;
      }, 300);
    }
  }

  ngOnInit(): void {}

  onSubmit() {
    this.isClicked = true;
    this.buttonText = 'Publishing...';
    setTimeout(() => {
      if (this.routeType === 'add') {
        const formatted_form_payload = this.formGroupContext.value;
        delete formatted_form_payload['_id'];
        this.onSubmitEmitter.emit({
          type: 'ADD',
          payload: formatted_form_payload,
        });
      } else {
        this.onSubmitEmitter.emit({
          type: 'EDIT',
          payload: this.formGroupContext.value,
        });
      }
    }, 1100);
    this.isClicked = false;
  }

  get_status(type: string): boolean {
    return type === 'text' ? true : false;
  }
}
