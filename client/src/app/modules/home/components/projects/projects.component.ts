import {Component, OnInit} from '@angular/core';
import {ProjectInterface, ProjectService} from "../../../shared";

@Component({
  selector: 'app-projects',
  template: `
    <div class="my-6 font-semibold rounded p-4">
      <div class="">
        <div class="text-center text-2xl md:text-3xl text-gray-800 hover:text-blue-700 cursor-pointer"> Glimpse of few
          projects
        </div>
      </div>
      <div class="my-6 grid grid-cols-2 gap-5" style="grid-template-columns: repeat(2, minmax(0, 1fr))">
        <div class="border border-gray-400 rounded-lg flex my-4 flex-col space-y-3 flex-wrap"
             *ngFor="let project of projectsTop4">
          <header>
            <div><img [src]="project.photo" [alt]="project.title"
                      class="object-cover rounded-tl-lg rounded-tr-lg"></div>
            <div class="text-xl text-blue-600 my-4 mx-2">{{project.title}}</div>
          </header>
          <main>
            <div class="leading-relaxed text-gray-800 mx-2">
              {{project.summary}}
            </div>
          </main>
          <footer class="">
            <div
              class="my-6 mr-4 bg-gray-50 cursor-pointer transition-all float-right rounded border border-blue-700 hover:bg-blue-600 hover:text-white inline-flex px-4 py-2">
              View Project &rarr;
            </div>
          </footer>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ProjectsComponent implements OnInit {
  projectsTop4: Array<ProjectInterface> = [];

  constructor(private readonly projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe((resp) => {
      this.projectsTop4 = resp.data.slice(0, 4);
    })
  }

}
