import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDTO, ProjectService } from 'src/app/modules/shared';

@Component({
  selector: 'app-tableview',
  template: `
    <div>
      <app-customtable
        [tableHeaders]="['photo', 'title', 'summary', 'actions']"
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
  projects: Array<ProjectDTO> = [];

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
    this.router.navigate(['cms', 'dashboard', 'projects', 'edit'], {
      state: project,
    });
  }

  onDelete(_id: any) {
    this.projectService.deleteProjectRecord(_id).subscribe((data) => {
      this.projects = this.projects.filter((project) => project._id !== _id);
    });
  }
}
