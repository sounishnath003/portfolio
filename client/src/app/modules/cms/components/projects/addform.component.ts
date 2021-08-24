import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addform',
  template: ` <div>form add value</div> `,
  styles: [],
})
export class AddformComponent implements OnInit {
  dropDownList: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
