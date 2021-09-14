import {Component, OnInit} from '@angular/core';
import {ProjectInterface, ProjectService} from 'src/app/modules/shared';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tableview',
  template: `
    <div>
      <app-customtable
        [tableHeaders]="['photo', 'title', 'summary', 'description', 'actions']"
        [uniqueIdentifierProperty]="'_id'"
        (onEditFired)="onEdit($event)"
        (onDeleteFired)="onDelete($event)"
        [loadData]="projects"
      ></app-customtable>
    </div>
  `,
  styles: [],
})
export class TableviewComponent implements OnInit {
  projects: Array<ProjectInterface> = [];

  constructor(private projectService: ProjectService, private router: Router) {
  }

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

  onDelete(_id: any) {
    this.projectService.deleteProjectRecord(_id).subscribe((data) => {
      this.projects = this.projects.filter((project) => project._id !== _id);
    })
  }
}
