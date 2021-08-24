import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cms',
  template: `
    <div class="w-full">
      <app-header></app-header>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./cms.component.css'],
})
export class CmsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
