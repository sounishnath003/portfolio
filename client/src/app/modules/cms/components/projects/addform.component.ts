import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addform',
  template: `
    <div class="my-6 font-semibold text-gray-800">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div class="my-3 flex flex-col space-y-2">
          <label for="photo">Photo url: </label>
          <div>
            <input
              formControlName="photo"
              name="photo"
              type="text"
              class="px-8 py-2 rounded border"
              placeholder="Add photo url"
            />
          </div>
        </div>
        <div class="my-3 flex flex-col space-y-2">
          <label for="title">Project Title: </label>
          <div>
            <input
              formControlName="title"
              name="title"
              type="text"
              class="px-8 py-2 rounded border"
              placeholder="Enter title"
            />
          </div>
        </div>
        <div class="my-3 flex flex-col space-y-2">
          <label for="Summary">Project Summary: </label>
          <div>
            <input
              formControlName="summary"
              name="Summary"
              type="text"
              class="px-8 py-2 rounded border"
              placeholder="Enter short description"
            />
          </div>
        </div>
        <div class="my-3 flex flex-col space-y-2">
          <label for="Description">Project Description: </label>
          <div>
            <textarea
              formControlName="description"
              name="Description"
              type="text"
              class="px-8 py-2 rounded border"
              placeholder="Enter description"
            ></textarea>
          </div>
        </div>

        <div class="my-4">
          <input
            class="px-6 py-2 rounded bg-blue-700 text-white"
            type="submit"
            value="Save"
          />
        </div>
      </form>
    </div>
  `,
  styles: [],
})
export class AddformComponent implements OnInit {
  form: FormGroup = new FormGroup({
    photo: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    summary: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}
}
