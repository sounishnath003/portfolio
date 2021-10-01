import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomFormInterface } from 'src/app/modules/shared/components/customform/customform.component';

@Component({
  selector: 'app-addformtimeline',
  template: `
    <div class="font-semibold text-gray-800">
      <div class="text-2xl text-blue-600">Create new timeline</div>
      <div class="my-4">
        <form [formGroup]="form" (ngSubmit)="onSubmitClicked()">
          <div class="flex flex-col space-y-3">
            <label for="location">Location Address: </label>
            <input
              required
              type="text"
              name="location"
              id="location"
              formControlName="location"
              class="py-2 px-4 rounded bg-gray-50 border outline-none border-gray-600"
              placeholder="Bangaluru, Remote Work"
            />
          </div>
          <div class="flex flex-col space-y-3 my-3">
            <label for="roleOffered">Role Offered: </label>
            <input
              required
              type="text"
              name="roleOffered"
              id="roleOffered"
              formControlName="roleOffered"
              class="py-2 px-4 rounded bg-gray-50 border outline-none border-gray-600"
              placeholder="Asset scanner using Go"
            />
          </div>
          <div class="flex flex-col space-y-3">
            <label for="organization">Organization: </label>
            <input
              required
              type="text"
              name="organization"
              id="organization"
              formControlName="organization"
              class="py-2 px-4 rounded bg-gray-50 border outline-none border-gray-600"
              placeholder="A short organization of the related project"
            />
          </div>
          <div class="flex flex-col space-y-3">
            <label for="timeDuration">Time Duration: </label>
            <input
              required
              type="text"
              name="timeDuration"
              id="timeDuration"
              formControlName="timeDuration"
              class="py-2 px-4 rounded bg-gray-50 border outline-none border-gray-600"
              placeholder="A short timeDuration of the related project"
            />
          </div>
          <div class="flex flex-col space-y-3 my-3">
            <label for="workDescription">Work Description: </label>
            <textarea
              required
              rows="5"
              type="text"
              name="workDescription"
              id="workDescription"
              formControlName="workDescription"
              class="py-2 px-4 rounded bg-gray-50 border outline-none border-gray-600"
              placeholder="workDescription: Add some good description which tells your experience"
            ></textarea>
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
export class AddformtimelineComponent implements OnInit {
  buttonText: string = 'Publish';
  form: FormGroup = new FormGroup({
    _id: new FormControl(null, []),
    location: new FormControl('', [Validators.requiredTrue]),
    roleOffered: new FormControl('', [Validators.requiredTrue]),
    organization: new FormControl('', [Validators.requiredTrue]),
    timeDuration: new FormControl('', [Validators.requiredTrue]),
    workDescription: new FormControl('', [Validators.requiredTrue]),
  });

  // * FormContent
  formPayload: Array<CustomFormInterface> = [
    {
      fieldControlName: 'location',
      labelText: 'Location Address',
      type: 'text',
      placeholderText: 'Bangaluru, Remote Work',
    },
    {
      fieldControlName: 'roleOffered',
      labelText: 'Role Offered',
      type: 'text',
      placeholderText: 'Asset scanner using Go',
    },
    {
      fieldControlName: 'organization',
      labelText: 'Organization',
      type: 'text',
      placeholderText: 'A short organization of the related project',
    },
    {
      fieldControlName: 'timeDuration',
      labelText: 'Time Duration',
      type: 'text',
      placeholderText: 'A short timeDuration of the related project',
    },
    {
      fieldControlName: 'workDescription',
      labelText: 'Work Description',
      type: 'textarea',
      placeholderText:
        'workDescription: Add some good description which tells your experience',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmitClicked() {
    console.log(this.form.value);
  }
}
