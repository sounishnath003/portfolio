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
import { ProjectTypeService } from '../../../../shared';

@Component({
  selector: 'app-add-form',
  template: `
    <div *ngIf="error" class="text-red-400 font-semibold">
      Error: {{ error }}
    </div>
    <div class="font-semibold text-gray-800">
      <div class="text-2xl text-blue-600">Create new project type</div>
      <div class="my-4">
        <form [formGroup]="form" (ngSubmit)="onSubmitClicked()">
          <div class="flex flex-col space-y-3">
            <label for="logo">Logo URL: </label>
            <input
              required
              type="url"
              name="logo"
              id="logo"
              formControlName="logo"
              class="py-2 px-4 rounded bg-gray-50 border outline-none border-gray-600"
              placeholder="https://goo.gl/images/assets/v1/ng.svg"
            />
          </div>
          <div class="flex flex-col space-y-3 my-3">
            <label for="projectType">Project Type: </label>
            <input
              required
              type="text"
              name="projectType"
              id="projectType"
              formControlName="projectType"
              class="py-2 px-4 rounded bg-gray-50 border outline-none border-gray-600"
              placeholder="Project Type: Angular"
            />
          </div>
          <div class="flex flex-col space-y-3">
            <label for="tags">Tags: </label>
            <input
              required
              type="text"
              name="tags"
              id="tags"
              formControlName="tags"
              class="py-2 px-4 rounded bg-gray-50 border outline-none border-gray-600"
              placeholder="#angular, #webdev, ..."
            />
          </div>
          <div class="flex flex-col space-y-3 my-3">
            <label for="description">Description: </label>
            <textarea
              required="true"
              rows="5"
              type="text"
              name="description"
              id="description"
              formControlName="description"
              class="py-2 px-4 rounded bg-gray-50 border outline-none border-gray-600"
              placeholder="Description: Add some good description which tells your experience"
            ></textarea>
          </div>
          <button
            type="submit"
            value="Save"
            class="my-4 float-right px-8 py-2 tracking-wide rounded bg-blue-600 text-white"
          >
            {{ buttonText }}
          </button>
        </form>
      </div>
    </div>
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
    _id: new FormControl(''),
    __v: new FormControl(''),
    projectType: new FormControl('', { validators: [Validators.required] }),
    tags: new FormControl('', { validators: [Validators.required] }),
    logo: new FormControl('', { validators: [Validators.required] }),
    description: new FormControl('', { validators: [Validators.required] }),
  });

  constructor(
    private readonly projectTypeService: ProjectTypeService,
    private router: Router
  ) {
    this.preloadChecksForUrlState();
  }

  ngOnInit(): void {
    if (this.projectToEdit !== null) {
      this.form.setValue({
        ...this.form.value,
        ...this.projectToEdit,
        tags: this.projectToEdit.tags.toString(),
      });
      console.log(this.form.value);
    }
  }

  onSubmitClicked() {
    if (this.form.invalid) alert('Please fill your data correctly');
    else {
      const rawFormData = this.form.value;
      this.buttonText = 'Publishing...';
      setTimeout(() => {
        if (this.urlType === 'add')
          this.createNewProjectTypeRecord(rawFormData);
        else this.editProjectType(rawFormData);
      }, 1100);
    }
  }

  ngOnDestroy() {
    this.activeSubscription.unsubscribe();
  }

  private preloadChecksForUrlState() {
    this.urlType = this.router.url.split('/')[4];
    if (this.urlType === 'edit') {
      const state = this.router.getCurrentNavigation()?.extras.state;
      this.form.setValue({ ...this.form.value, ...state });
    }
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
