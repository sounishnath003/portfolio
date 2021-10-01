import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomFormInterface } from 'src/app/modules/shared/components/customform/customform.component';

@Component({
  selector: 'app-addformtimeline',
  template: `
    <app-customform
      formTitle="Create new timeline"
      [formGroupContext]="form"
      [customFormContext]="formPayload"
      (onSubmitEmitter)="onSubmitClicked($event)"
    ></app-customform>
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
      placeholderText: 'Frontend Engineer Intern ~ Angular',
    },
    {
      fieldControlName: 'organization',
      labelText: 'Organization',
      type: 'text',
      placeholderText: 'Any Good Software Organization',
    },
    {
      fieldControlName: 'timeDuration',
      labelText: 'Time Duration',
      type: 'text',
      placeholderText: 'Feb 2021 - June 2021',
    },
    {
      fieldControlName: 'workDescription',
      labelText: 'Work Description',
      type: 'textarea',
      placeholderText:
        'workDescription: Add some good description which tells your experience and achievements during your project contribution.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSubmitClicked(formValuePayload: any) {
    console.log(formValuePayload);
  }
}
