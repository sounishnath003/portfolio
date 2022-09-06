import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recommendation } from 'src/app/template/portfolio-config.interface';

@Component({
  selector: 'app-quick-thoughts',
  templateUrl: './quick-thoughts.component.html',
  styleUrls: ['./quick-thoughts.component.css'],
})
export class QuickThoughtsComponent implements OnInit {
  @Input() recommendations$!: Observable<Recommendation[]>;
  constructor() {}

  ngOnInit(): void {}
}
