import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-herobanner',
  template: `
    <div class="mx-24">
      <div class="text-gray-800 font-semibold back-image">
        <div class="my-10 text-3xl md:text-4xl">
          <div>
            <h1
              class="font-semibold my-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-600 to-indigo-800"
            >
              {{ title }}
            </h1>
            <div>
              <p class="text-sm leading-relaxed tracking-normal text-gray-600">
                {{ subtitle }}
              </p>
            </div>
          </div>
        </div>
        <app-social-links></app-social-links>
      </div>
    </div>
  `,
  styles: [
    `
      .back-image {
        /* height: 600px; 
        background-image: url('/assets/scrumboard.svg'); */
      }
    `,
  ],
})
export class HerobannerComponent implements OnInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';

  constructor() {}

  ngOnInit(): void {}
}
