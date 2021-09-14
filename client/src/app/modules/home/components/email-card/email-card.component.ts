import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-card',
  template: `
    <div class="p-4 my-4 bg-gray-50 rounded-lg font-semibold text-gray-700">
      <div class="text-center text-2xl">Get in touch</div>
      <div class="my-3 text-center">
        </div>
        <div class="my-3 text-center">
        Feel free to contact me and discuss with new project ideas together.
        <br />
        If you need more details, feel free to email me at
        <a class="text-blue-600" href="mailto:flock.sinasini@gmail.com">flock.sinasini@gmail.com.</a>
      </div>
    </div>
  `,
  styles: [],
})
export class EmailCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
