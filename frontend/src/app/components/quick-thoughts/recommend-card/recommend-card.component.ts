import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Recommendation } from 'src/app/template/portfolio-config.interface';

@Component({
  selector: 'app-recommend-card',
  templateUrl: './recommend-card.component.html',
  styleUrls: ['./recommend-card.component.css'],
})
export class RecommendCardComponent {
  private _size$: Observable<number> = new Observable();
  @Input() recommendation!: Recommendation;
}
