import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectTypeService } from '../../../global-services/project-type.service';

@Component({
  selector: 'app-project-type',
  template: `
    <div>
      <div class="text-2xl font-semibold">Project-Type</div>

      <div class="my-4">{{ projectTypes | json }}}</div>

      <div class="my-6 font-semibold text-gray-800">
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
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
    </div>
  `,
  styles: [],
  providers: [ProjectTypeService],
})
export class ProjectTypeComponent implements OnInit {
  projectTypes: any[] = [];

  form: FormGroup = new FormGroup({
    projectType: new FormControl('', { validators: [Validators.required] }),
    tags: new FormControl('', { validators: [Validators.required] }),
    logo: new FormControl('', { validators: [Validators.required] }),
    description: new FormControl('', { validators: [Validators.required] }),
  });

  constructor(private readonly projectService: ProjectTypeService) {}

  ngOnInit(): void {
    this.projectService.getAllProjectTypes().subscribe((resp: any) => {
      this.projectTypes = resp.data;
    });
  }

  onSubmit() {
    const rawFormData = this.form.value;
    const formData = { ...rawFormData, tags: rawFormData.tags.split(',') };
    console.log(formData);

    this.projectService
      .createNewProjectType(formData)
      .subscribe(() => this.projectTypes.push(formData));
    this.form.reset();
  }
}
