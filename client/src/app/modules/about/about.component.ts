import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div>
      <app-herobanner
        title="It's time to introduce myself"
        subtitle="Hello! I enjoy creating things that are possibily live on the internet, 
        weather that be websites, applications or anything in between. 
        At the same time quite enthusiastic about Cloud Infrastructure and DataScience."
      ></app-herobanner>
    </div>
  `,
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
