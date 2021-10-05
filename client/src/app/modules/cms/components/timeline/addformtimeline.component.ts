import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomFormInterface } from 'src/app/modules/shared/components/customform/customform.component';
import {
  TimelineDTO,
  TimelineService,
} from 'src/app/modules/shared/services/timeline.service';

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
  providers: [TimelineService],
})
export class AddformtimelineComponent implements OnInit, OnDestroy {
  activeSubscription: Subscription = new Subscription();
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

  constructor(
    private router: Router,
    private readonly timelineService: TimelineService
  ) {}

  ngOnDestroy(): void {
    this.activeSubscription.unsubscribe();
  }

  ngOnInit(): void {}

  onSubmitClicked(emittedPayload: {
    type: string;
    payload: ThisType<TimelineDTO>;
  }) {
    emittedPayload.type === 'ADD'
      ? this.create_new_timeline(emittedPayload.payload)
      : this.update_edited_timeline(emittedPayload.payload);
  }

  create_new_timeline(payload: Partial<TimelineDTO>) {
    this.activeSubscription = this.timelineService
      .createNewTimeline(payload)
      .subscribe((data) => {
        this.router.navigate(['cms', 'dashboard', 'timelines']).then();
      });
  }
  update_edited_timeline(payload: ThisType<TimelineDTO>) {
    this.activeSubscription = this.timelineService
      .updateNewTimeline(payload)
      .subscribe((data) => {
        this.router.navigate(['cms', 'dashboard', 'timelines']).then();
      });
  }
}
