import { Component, Input, OnInit } from '@angular/core';
import { TimelineDTO } from 'src/app/modules/shared/services/timeline.service';

@Component({
  selector: 'app-timelinecard',
  template: `
    <section>
      <div
        class="my-4 cursor-pointer border-b border-gray-100 hover:bg-indigo-50 transition-all p-2 md:p-4 rounded-lg flex flex-col justify-start items-start space-y-2"
      >
        <div class="font-sm">{{ timeline.location }}</div>
        <div
          class="flex text-gray-800 w-full flex-row justify-between items-center"
        >
          <div class="m-auto flex-1">
            <div class="flex flex-col text-indigo-600 text-xl space-y-1">
              {{ timeline.roleOffered }} @ {{ timeline.organization }}
            </div>
          </div>
          <div class="m-auto text-indigo-800">
            <div>{{ timeline.timeDuration }}</div>
          </div>
        </div>
        <div
          class="leading-relaxed hover:text-blue-700 font-sm font-sans font-normal"
        >
          {{ timeline.workDescription }}
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class TimelinecardComponent implements OnInit {
  @Input() timeline!: TimelineDTO;
  constructor() {}

  ngOnInit(): void {}
}
