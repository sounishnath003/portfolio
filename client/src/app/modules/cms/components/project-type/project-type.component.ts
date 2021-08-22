import {Component, OnInit} from '@angular/core';
import {ProjectTypeService} from '../../../global-services/project-type.service';

@Component({
  selector: 'app-project-type',
  template: `
    <div>
      <div class="text-2xl font-semibold">Project-Type</div>
      <div class="flex flex-row space-x-4 justify-center items-center">
        <app-add-form
          *ngIf="!isEditRequested; else editForm"
          (onSubmitEventFired)="onSubmit($event)"
        ></app-add-form>
        <ng-template #editForm>
          <app-add-form
            (onEditEventFired)="onEditClicked($event)"
            [projectToEdit]="projectToEdit"
          ></app-add-form>
        </ng-template>
        <app-table-layout
          [projectTypes]="projectTypes"
          (onEditEventFired)="onEdit($event)"
        ></app-table-layout>
      </div>
    </div>
  `,
  styles: [],
  providers: [ProjectTypeService],
})
export class ProjectTypeComponent implements OnInit {
  projectTypes: any[] = [];
  isEditRequested: boolean = false;
  projectToEdit: any | null = null;

  constructor(private readonly projectService: ProjectTypeService) {
  }

  ngOnInit(): void {
    this.projectService.getAllProjectTypes().subscribe((resp: any) => {
      this.projectTypes = resp.data.reverse();
    });
  }

  onSubmit(rawFormData: any) {
    const formData = {...rawFormData, tags: rawFormData.tags.split(',')};
    this.projectService
      .createNewProjectType(formData)
      .subscribe(() => this.projectTypes.push(formData));
  }

  onEdit(projectPayload: any) {
    this.isEditRequested = true;
    this.projectToEdit = projectPayload;
  }

  onEditClicked(editedFormData: any) {
    const pid: string = editedFormData._id;
    this.projectService.updatedProjectType(editedFormData).subscribe((data) => {
      const rests = this.projectTypes.filter((p) => p._id !== pid);
      rests.push(editedFormData);
      this.projectTypes = rests;
    });
  }
}
