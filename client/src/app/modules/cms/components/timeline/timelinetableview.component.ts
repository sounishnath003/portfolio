import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/modules/shared/services/timeline.service';

@Component({
  selector: 'app-timelinetableview',
  template: `
    <app-customtable
      [tableHeaders]="[
        'location',
        'roleOffered',
        'organization',
        'timeDuration',
        'workDescription',
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
  constructor(private readonly timelineService: TimelineService) {}

  ngOnInit(): void {
    this.timelineService.getAllTimelines().subscribe((resp) => {
      this.timelines = resp.data;
    });
  }

  onEdit(id: any) {}
  onDelete(id: any) {}
}
