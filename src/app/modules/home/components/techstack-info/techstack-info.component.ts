import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-techstack-info',
  template: `
    <div class="md:my-20 my-8 -bg-gray-50 px-4 py-2 rounded-xl">
      <div class="text-gray-800 font-black text-xl"> A bit about me &rarr;</div>
      <div class="my-6 font-semibold text-gray-800" [innerHTML]="data">
      </div>
    </div>
  `,
  styles: []
})
export class TechstackInfoComponent implements OnInit {

  data: string = `<p> I am currently working at <span class="text-blue-600 font-semibold"> Tata Consultancy Services </span> as an
          Full time Software Engineer.  </p>`

  constructor() {
  }

  ngOnInit(): void {
  }

}
