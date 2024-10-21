import { Component } from '@angular/core';
import { GetInTouchComponent } from '../../components/get-in-touch/get-in-touch.component';
import { PortfolioApiService } from '../../services/portfolio-api.service';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-proudwork',
  standalone: true,
  imports: [GetInTouchComponent, AsyncPipe, JsonPipe],
  providers: [PortfolioApiService],
  templateUrl: './proudwork.component.html',
  styleUrl: './proudwork.component.css',
})
export class ProudworkComponent {
  achievements$: Observable<string[]> = this.portfolioService.achievements$;
  constructor(private readonly portfolioService: PortfolioApiService) { }
}
