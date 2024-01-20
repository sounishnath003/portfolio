import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  @Input()
  attributes$!: Observable<string>;
  @Input()
  profileSummary$!: Observable<string>;

  @Input()
  workedAtCompanies$!: Observable<{ companyName: string; image: string }[]>;

  constructor() {}
}
