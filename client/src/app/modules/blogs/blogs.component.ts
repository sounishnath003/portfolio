import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  template: `
    <app-herobanner
      title="When creativity brusts out for a story"
      subtitle="A blog is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries."
    ></app-herobanner>

    <div class="my-6 p-4 rounded-lg font-semibold bg-gray-50">
      <div class="text-blue-600 text-center tracking-wide">
        Yet Not Blogs are written. Stay connected.
      </div>
    </div>
  `,
  styles: [],
})
export class BlogsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
