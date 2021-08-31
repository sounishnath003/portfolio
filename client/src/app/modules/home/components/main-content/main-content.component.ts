import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-content',
  template: `
    <app-hero></app-hero>
    <app-short-info></app-short-info>
    <app-tech-tools></app-tech-tools>
    <app-projects></app-projects>
    <app-email-card></app-email-card>
  `,
  styles: []
})
export class MainContentComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
