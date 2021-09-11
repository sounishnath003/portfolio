import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/modules/shared';

@Component({
  selector: 'app-projects',
  template: `
    <div>
     <div>
       <button
         routerLink="/cms/dashboard/projects/add"
         class="flex mr-0 flex-wrap space-x-3 bg-blue-600 my-4 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
       >
         <div>
           <img src="assets/add-icon.svg" alt="add-icon" />
         </div>
         <div class="font-semibold">Add New</div>
       </button>
     </div>
      <div>
        <app-tableview></app-tableview>
      </div>
    </div>
  `,
  providers: [ProjectService],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
