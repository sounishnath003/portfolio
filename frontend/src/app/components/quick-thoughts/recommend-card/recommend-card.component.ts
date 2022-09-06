import { Component, Input } from '@angular/core';
import { Recommendation } from 'src/app/template/portfolio-config.interface';

@Component({
  selector: 'app-recommend-card',
  templateUrl: './recommend-card.component.html',
  styleUrls: ['./recommend-card.component.css'],
})
export class RecommendCardComponent {
  @Input() recommendation!: Recommendation;
}
