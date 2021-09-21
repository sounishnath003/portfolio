import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectInterface } from 'src/app/modules/shared';

@Component({
  selector: 'app-projectdetails',
  template: `
    <div *ngIf="project; else temp">
      <div class="text-3xl">{{ project.title }}</div>
    </div>
    <ng-template #temp>No Content</ng-template>
  `,
  styles: [],
})
export class ProjectdetailsComponent implements OnInit {
  project: ProjectInterface | undefined;

  constructor(private readonly route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const { _id = '', projectName = '' } = this.route.snapshot.params;
    const payload = this.router.getCurrentNavigation()?.extras.state || {};

    if (payload._id) {
      this.project = payload as ProjectInterface;
    }
  }
}
