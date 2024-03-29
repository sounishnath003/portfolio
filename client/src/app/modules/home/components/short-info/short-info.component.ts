import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-info',
  template: `
    <div
      id="__short-info-section"
      class="md:my-20 my-8 -bg-gray-50 px-4 py-4 rounded-xl"
    >
      <div class="text-gray-800 font-black text-xl">A bit about me &rarr;</div>
      <div
        class="my-6 leading-relaxed font-semibold text-gray-800"
        [innerHTML]="data"
      ></div>
      <div class="my-4">
        <button
          class="flex space-x-3 hover:bg-blue-700 transition-all bg-blue-600 text-white px-4 py-3 rounded-lg"
        >
          <div><img src="assets/file.svg" /></div>
          <a target="_blank" [href]="resume_link" [download]="resume_link"
            >Checkout Resume</a
          >
        </button>
      </div>
    </div>
  `,
  styles: [],
})
export class ShortInfoComponent implements OnInit {
  data: string = `
    <div> <p> Currently working at <span class="text-blue-700 font-semibold"> <a href="https://tcs.com" target="_blank">  Tata Consultancy Services </a> </span> as an
          Full time Software Engineer.  </p>
          <p> Who is quite proficient with building scalable backend systems with <span class="text-green-700 font-semibold"> NodeJS and Go </span>.  </p>
          <p> Also quite experienced with <span class="text-red-600 font-semibold"> Angular </span> &amp; <span class="text-blue-700 font-semibold"> React </span> ecosystems. </p> </div>
    <div class="my-4 w-2/3">
    <p> Now, I am exploring field of <b class="text-blue-700"> Cloud Infrastructure, DevOps, &amp; Data Science. </b> I train models as part of Machine Learning Projects, predict future and much more.
    <span> Equally enthusiastic to learn and build <span class="text-red-500 font-semibold"> Large Scale Distributed Systems. </span> </span> 
    I manage BigData, Hadoop and ELK Stack as a part of my job.
    </p>
    </div>
    <div class="mt-4">
      <p> You can find me on &rarr; <span class="text-blue-700"> <a target="_blank" href="https://github.com/sounishnath003" > GitHub </a> · <a target="_blank" href="https://www.linkedin.com/in/sounish-nath-897b30186/" > LinkedIn </a> · <a target="_blank" href="https://twitter.com/sounish1" > Twitter </a> </span> </p>
    </div>
          `;

  resume_link: string =
    'https://drive.google.com/file/d/1RqTw6wUERMhLG9C8ayAGxxCO7PvZkOxe/view';

  constructor() {}

  ngOnInit(): void {}
}
