import { Component, OnInit } from '@angular/core';
import { ProjectTypeService } from 'src/app/modules/shared';

@Component({
  selector: 'app-project-type',
  template: `
    <div>
      <app-add-route-button
        routeToLink="/cms/dashboard/project-type/add"
      ></app-add-route-button>
      <div class="flex flex-row space-x-4 justify-center items-center">
        <app-table-layout
          [projectTypes]="projectTypes"
          (onDeleteEventFired)="onDelete($event)"
        ></app-table-layout>
      </div>
    </div>
  `,
  providers: [ProjectTypeService],
  styles: [],
})
export class ProjectTypeComponent implements OnInit {
  projectTypes: any[] = [];

  constructor(private readonly projectTypeService: ProjectTypeService) {}

  ngOnInit(): void {
    this.projectTypeService.getAllProjectTypes().subscribe((resp: any) => {
      this.projectTypes = resp.data;
    });
  }

  onEditClicked(editedFormData: any) {
    const _editedFormTemp = editedFormData;
    const pid: string = editedFormData._id;
    this.projectTypeService
      .updatedProjectType(_editedFormTemp)
      .subscribe((resp: any) => {
        resp.subscribe((re: any) => {
          this.projectTypes = re.data;
        });
      });
  }

  onDelete(projectId: string) {
    this.projectTypeService.deleteProjectType(projectId).subscribe((data) => {
      this.projectTypes = this.projectTypes.filter(
        (projectType) => projectType._id !== projectId
      );
    });
  }
}
