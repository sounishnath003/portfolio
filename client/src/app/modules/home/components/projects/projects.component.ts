import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <div class="my-6 font-semibold rounded p-4">
      <div class="">
        <div class="text-center text-2xl md:text-3xl text-gray-800 hover:text-blue-700 cursor-pointer"> Glimpse of few projects </div>
      </div>
      <div class="my-6 grid grid-cols-2 gap-5" style="grid-template-columns: repeat(2, minmax(0, 1fr))">
        <div class="lg rounded-lg flex my-4 flex-col space-y-3 flex-wrap" *ngFor="let c of [1,2,3,4]" >
          <header>
            <div><img src="https://www.prvnbist.com/images/design/quick-polls.png" alt="quick-polls" class="object-cover rounded-tl-lg rounded-tr-lg"></div>
            <div class="text-xl">Quick Polls</div>
          </header>
          <main>
            <div class="leading-relaxed m-2">
              A voting application where people can create polls that other people can vote on and share their opinions.
            </div>
          </main>
          <footer class="my-4 mx-2">
            <div class="font-sans rounded bg-blue-600 text-white inline-flex px-4 py-2"> View Project &rarr; </div>
          </footer>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProjectsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
