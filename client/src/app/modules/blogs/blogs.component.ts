import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  template: `
    <app-herobanner
      title="When creativity brusts out for a story"
      subtitle="A blog is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries."
    ></app-herobanner>
    blogs ready
  `,
  styles: [],
})
export class BlogsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
