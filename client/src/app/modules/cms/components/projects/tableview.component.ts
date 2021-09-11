import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjectInterface, ProjectService } from 'src/app/modules/shared';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tableview',
  template: `
    <div>
      <div
        class="w-full rounded-lg shadow-lg border-gray-600 px-4 md:px-10 pt-4 md:pt-7 pb-5 border whitespace-pre-wrap overflow-y-hidden"
      >
        <table class="table able-fixed h-10">
          <thead>
            <tr
              class="h-16 font-semibold w-full text-sm leading-none text-gray-800"
            >
              <th class="text-left pl-4" scope="col">Photo</th>
              <th class="text-left pl-4">Title</th>
              <th class="text-left pl-4">Summary</th>
              <th class="text-left pl-4">Description</th>
              <th class="text-left pl-4">Actions</th>
            </tr>
          </thead>
          <tbody *ngIf="projects">
            <tr
              class="h-32 cursor-pointer text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
              *ngFor="let project of projects"
            >
              <td class="text-blue-600 font-semibold">
                <img [src]="project.photo" class="rounded-full ring-2 ring-blue-600 shadow w-10 h-10" [alt]="project.title" />
              </td>
              <td class="whitespace-pre-wrap text-blue-600 font-semibold leading-relaxed">
                {{ project.title }}
              </td>
              <td class="leading-relaxed">{{ project.summary }}</td>
              <td class="">
                <div class="w-2/3 leading-relaxed">
                  {{ project.description }}
                </div>
              </td>
              <td class="">
                <div class="flex flex-row space-x-4">
                  <div (click)="onEdit(project)">
                    <img
                      src="assets/edit.svg"
                      alt="edit-icon"
                      class="w-5 h-5"
                    />
                  </div>
                  <div (click)="onDelete(project._id)">
                    <img
                      src="assets/trash.svg"
                      alt="trash-icon"
                      class="w-5 h-5"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [],
})
export class TableviewComponent implements OnInit {
  projects: Array<ProjectInterface> = [];
  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getAllProjects().subscribe((resp) => {
      this.projects = resp.data.reverse();
    });
  }

  onEdit(project: any) {
    this.router.navigate(['cms', 'dashboard', 'projects', 'edit'], {state: project})
  }

  onDelete(_id: string) {
    this.projectService.deleteProjectRecord(_id).subscribe((data) => {
      this.projects = this.projects.filter((project) => project._id !== _id);
    })
  }
}
