import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjectInterface, ProjectService } from 'src/app/modules/shared';

@Component({
  selector: 'app-tableview',
  template: `
    <div>
      <div class="text-xl">Table View Component</div>
      <div
        class="w-full rounded-lg shadow-lg border-gray-600 px-4 md:px-10 pt-4 md:pt-7 pb-5 border whitespace-pre-wrap overflow-y-hidden"
      >
        <table class="table able-fixed h-10">
          <thead>
            <tr
              class="h-16 font-semibold w-full text-sm leading-none text-gray-800"
            >
              <th class="text-left pl-4" scope="col">ProjectType</th>
              <th class="text-left pl-4">Description</th>
              <th class="text-left pl-4">Tags</th>
              <th class="text-left pl-4">Actions</th>
            </tr>
          </thead>
          <tbody *ngIf="projects$ | async">
            <tr
              class="h-32 cursor-pointer text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
              *ngFor="let project of projects$ | async as list"
            >
              <td class="text-blue-600 font-semibold">
                {{ project.title }}
              </td>
              <td class="whitespace-pre-wrap leading-relaxed">
                {{ project.summary }}
              </td>
              <td class="">{{ project.logo }}</td>
              <td class="">
                <div class="flex flex-row space-x-4">
                  <div>
                    <img
                      src="assets/edit.svg"
                      alt="edit-icon"
                      class="w-4 h-4"
                    />
                  </div>
                  <div>
                    <img
                      src="assets/trash.svg"
                      alt="trash-icon"
                      class="w-4 h-4"
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
  projects$: Observable<Array<ProjectInterface>> | null = null;
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getAllProjects().subscribe((resp) => {
      this.projects$ = of(resp.data);
    });
  }
}
