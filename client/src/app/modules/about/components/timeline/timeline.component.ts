import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  TimelineDTO,
  TimelineService,
} from 'src/app/modules/shared/services/timeline.service';

@Component({
  selector: 'app-timeline',
  template: `
    <div class="my-6 font-semibold text-gray-700">
      <div class="flex flex-row space-x-3">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="blue"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path _ngcontent-serverApp-c37="" d="M3 3v18h18"></path>
            <path
              _ngcontent-serverApp-c37=""
              d="m18.7 8-5.1 5.2-2.8-2.7L7 14.3"
            ></path>
          </svg>
        </div>
        <div class="text-xl md:text-3xl">Timeline Tracks</div>
      </div>
      <app-timelinecard [timeline]="p" *ngFor="let p of timelines$ | async"></app-timelinecard>
    </div>
  `,
  styles: [],
  providers: [TimelineService],
})
export class TimelineComponent implements OnInit {
  timelines$: Observable<Array<TimelineDTO>> = new Observable();

  constructor(private timelineService: TimelineService) {
    this.timelineService.getAllTimelines().subscribe((resp) => {
      this.timelines$ = of(resp.data);
    });
  }

  ngOnInit(): void {}
}
