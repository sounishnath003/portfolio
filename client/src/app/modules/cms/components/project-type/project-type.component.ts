import { Component, OnInit } from '@angular/core';
import { ProjectTypeService } from 'src/app/modules/shared';

@Component({
  selector: 'app-project-type',
  template: `
    <div>
      <div>
        <button
          routerLink="/cms/dashboard/project-type/add"
          class="flex mr-0 flex-wrap space-x-3 bg-blue-600 my-4 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
        >
          <div>
            <img src="assets/add-icon.svg" alt="add-icon" />
          </div>
          <div class="font-semibold">Add New</div>
        </button>
      </div>
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
      this.projectTypes = resp.data.reverse();
    });
  }

  onEditClicked(editedFormData: any) {
    const _editedFormTemp = editedFormData;
    const pid: string = editedFormData._id;
    this.projectTypeService
      .updatedProjectType(_editedFormTemp)
      .subscribe((resp: any) => {
        resp.subscribe((re: any) => {
          this.projectTypes = re.data.reverse();
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
