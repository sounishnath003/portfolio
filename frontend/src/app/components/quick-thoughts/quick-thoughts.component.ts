import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recommendation } from 'src/app/template/portfolio-config.interface';

@Component({
  selector: 'app-quick-thoughts',
  templateUrl: './quick-thoughts.component.html',
  styleUrls: ['./quick-thoughts.component.css'],
})
export class QuickThoughtsComponent implements OnInit {
  screenSize: number = 8;
  @Input() recommendations$!: Observable<Recommendation[]>;
  constructor() {}

  ngOnInit(): void {
    this.setScreenSize();
  }

  private setScreenSize() {
    if (window.innerWidth <= 600) {
      this.screenSize = 12;
    } else {
      this.screenSize = 8;
    }
  }
}
