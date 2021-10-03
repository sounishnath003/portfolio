import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimelineService } from 'src/app/modules/shared/services/timeline.service';

@Component({
  selector: 'app-timelinetableview',
  template: `
    <app-customtable
      [tableHeaders]="[
        '_id',
        'location',
        'roleOffered',
        'organization',
        'timeDuration',
        'actions'
      ]"
      [uniqueIdentifierProperty]="'_id'"
      (onEditFired)="onEdit($event)"
      (onDeleteFired)="onDelete($event)"
      [loadData]="timelines"
    ></app-customtable>
  `,
  styles: [],
  providers: [TimelineService],
})
export class TimelinetableviewComponent implements OnInit {
  timelines: Array<any> = [];
  constructor(
    private readonly timelineService: TimelineService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.timelineService.getAllTimelines().subscribe((resp) => {
      this.timelines = resp.data;
    });
  }

  onEdit(timeline: any) {
    this.router.navigate(['cms', 'dashboard', 'timelines', 'edit'], {
      state: timeline
    });
  }
  onDelete(id: any) {}
}
