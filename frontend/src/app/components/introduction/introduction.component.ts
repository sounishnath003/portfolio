import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompaniesWorkedAt } from 'src/app/template/portfolio-config.interface';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
})
export class IntroductionComponent implements OnInit {
  @Input() featureObserver$!: Observable<string>;
  @Input() currentBio$!: Observable<string>;
  @Input() companies$!: Observable<CompaniesWorkedAt[]>;

  constructor() {}

  ngOnInit(): void {}
}
