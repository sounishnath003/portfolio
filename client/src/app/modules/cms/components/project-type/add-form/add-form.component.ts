import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomFormInterface } from 'src/app/modules/shared/components/customform/customform.component';
import { ProjectTypeDTO, ProjectTypeService } from '../../../../shared';

@Component({
  selector: 'app-add-form',
  template: `
    <app-customform
      formTitle="Create new project type"
      [formGroupContext]="form"
      [customFormContext]="formContext"
      (onSubmitEmitter)="onSubmitClicked($event)"
    ></app-customform>
  `,
  styles: [],
})
export class AddFormComponent implements OnInit, OnDestroy {
  @Input() projectToEdit: any | null = null;
  @Output() onSubmitEventFired: EventEmitter<HTMLButtonElement> =
    new EventEmitter<HTMLButtonElement>();
  @Output() onEditEventFired: EventEmitter<HTMLButtonElement> =
    new EventEmitter<HTMLButtonElement>();

  error: string = '';
  activeSubscription: Subscription = new Subscription();
  urlType: string = '';
  buttonText: string = 'Publish';

  form: FormGroup = new FormGroup({
    _id: new FormControl(null, []),
    __v: new FormControl(''),
    projectType: new FormControl('', { validators: [Validators.required] }),
    tags: new FormControl('', { validators: [Validators.required] }),
    logo: new FormControl('', { validators: [Validators.required] }),
    description: new FormControl('', { validators: [Validators.required] }),
  });

  // * Form Context Payload for custom form builder
  formContext: Array<CustomFormInterface> = [
    {
      fieldControlName: 'logo',
      labelText: 'Logo URL',
      placeholderText: 'https://goo.gl/images/assets/v1/ng.svg',
      type: 'url',
    },
    {
      fieldControlName: 'projectType',
      labelText: 'Project Type',
      placeholderText: 'Project Type: Angular',
      type: 'text',
    },
    {
      fieldControlName: 'tags',
      labelText: 'Tags',
      placeholderText: '#angular, #webdev, ...',
      type: 'text',
    },
    {
      fieldControlName: 'description',
      labelText: 'Description',
      placeholderText:
        'Description: Add some good description which tells your experience',
      type: 'textarea',
    },
  ];

  constructor(
    private readonly projectTypeService: ProjectTypeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.projectToEdit !== null) {
      this.form.setValue({
        ...this.form.value,
        ...this.projectToEdit,
        tags: this.projectToEdit.tags.toString(),
      });
    }
  }

  onSubmitClicked(emittedPayload: {
    type: string;
    payload: Partial<ProjectTypeDTO>;
  }) {
    emittedPayload.type === 'ADD'
      ? this.createNewProjectTypeRecord(emittedPayload.payload)
      : this.editProjectType(emittedPayload.payload);
  }

  ngOnDestroy() {
    this.activeSubscription.unsubscribe();
  }

  private createNewProjectTypeRecord(rawFormData: any) {
    const formData = { ...rawFormData, tags: rawFormData.tags };
    this.activeSubscription = this.projectTypeService
      .createNewProjectType(formData)
      .subscribe(
        (data) => {
          this.router.navigate(['cms', 'dashboard', 'project-type']);
          this.form.reset();
        },
        (error: any) => (this.error = error.message)
      );
  }

  private editProjectType(rawFormData: any) {
    const formData = { ...rawFormData };
    this.activeSubscription = this.projectTypeService
      .updatedProjectType(formData)
      .subscribe(
        (data) => {
          this.router.navigate(['cms', 'dashboard', 'project-type']);
          this.form.reset();
        },
        (error) => (this.error = error.message)
      );
  }
}
