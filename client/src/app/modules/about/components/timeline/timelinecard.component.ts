import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timelinecard',
  template: `
    <section>
      <div
        class="my-4 cursor-pointer hover:bg-indigo-50 transition-all p-4 rounded-lg flex flex-col justify-start items-start space-y-2"
      >
        <div class="font-sm">Bengaluru, India</div>
        <div
          class="flex text-gray-800 w-full flex-row justify-between items-center"
        >
          <div class="m-auto flex-1">
            <div class="flex flex-col text-indigo-600 text-xl space-y-1">
              Angular Developer Intern @ ERCESS LIVE
            </div>
          </div>
          <div class="m-auto text-indigo-800">
            <div>Aug 2019 - Jul 2021</div>
          </div>
        </div>
        <div
          class="leading-relaxed hover:text-blue-700 font-sm font-sans font-normal"
        >
          Building interface for connected ecosystem of apps built for the food
          tech industry. Built various apps like order mgmt, subscription shop.
          Handled stripe, razorpay and various delivery integrations.
          Experienced building a foundation for team and effectively managing
          the same.
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class TimelinecardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
