import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-route-button',
  template: `
    <div>
      <button
        [routerLink]="routeToLink"
        class="flex mr-0 flex-wrap space-x-3 bg-blue-600 my-4 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
      >
        <div>
          <img src="assets/add-icon.svg" alt="add-icon" />
        </div>
        <div class="font-semibold">Add New</div>
      </button>
    </div>
  `,
  styles: [],
})
export class AddRouteButtonComponent implements OnInit {
  @Input() routeToLink: string = '';

  constructor() {}

  ngOnInit(): void {}
}
