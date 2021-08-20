import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="w-auto">
      <router-outlet></router-outlet>
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
