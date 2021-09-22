import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectInterface, ProjectService } from 'src/app/modules/shared';

@Component({
  selector: 'app-projectdetails',
  template: `
    <div *ngIf="project; else temp">
      <div class="text-3xl">{{ project.title }}</div>
      <div class="my leading-relaxed" [outerHTML]="project.summary"></div>
    </div>
    <ng-template #temp>No Content</ng-template>
  `,
  styles: [],
  providers: [ProjectService],
})
export class ProjectdetailsComponent implements OnInit {
  project!: ProjectInterface;

  constructor(
    private readonly route: ActivatedRoute,
    private router: Router,
    private readonly projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.loadPayloadRecieved();
  }

  private loadPayloadRecieved() {
    const { id = '', projectName = '' } = this.route.snapshot.params;
    this.projectService.getProjectById(id).subscribe((resp) => {
      this.project = resp.data;
    });
  }
}
