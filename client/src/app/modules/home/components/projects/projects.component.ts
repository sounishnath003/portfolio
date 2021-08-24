import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <div class="my-6 font-semibold rounded p-4">
      <div class="mb-6">
        <div class="text-center text-3xl text-blue-800"> Glimpse of few projects </div>
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
