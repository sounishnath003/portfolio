import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cms',
  template: `
    <div>
      <div> CMS Dashboard </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./cms.component.css'],
})
export class CmsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
