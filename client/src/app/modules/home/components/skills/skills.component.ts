import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <section class="font-semibold">
      <div class="my-6">
        <div
          class="text-center text-gray-700 hover:text-indigo-700 text-3xl cursor-pointer"
        >
          My Skills
        </div>
        <div class="textxl opacity-50">CODE</div>
        <div class="my-2">
          <div class="text-blue-700">Front End</div>
          <div
            class="parent-grid"
          >
            <div
              *ngFor="let c of [1, 2, 3, 4, 5, 5, 5]"
              class="m-auto rounded px-4 py-2 border hover:bg-gray-100 transition-all hover:text-blue-700 cursor-pointer"
            >
              JavaScript/ES6+
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .parent-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 8px;
        grid-row-gap: 8px;
      }
    `,
  ],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
