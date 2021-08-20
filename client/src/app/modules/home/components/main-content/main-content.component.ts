import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-content',
  template: `
    <app-hero></app-hero>
    <app-short-info></app-short-info>
    <app-tech-tools></app-tech-tools>
  `,
  styles: []
})
export class MainContentComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
