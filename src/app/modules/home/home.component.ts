import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="w-auto">
      <app-hero></app-hero>
      <app-techstack-info></app-techstack-info>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
