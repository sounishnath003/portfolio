import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
   <div>
     <app-featuredprojects></app-featuredprojects>
     <div>
       projects home
     </div>
   </div>
  `,
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
