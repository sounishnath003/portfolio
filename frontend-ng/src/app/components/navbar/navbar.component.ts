import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { PortfolioApiService } from '../../services/portfolio-api.service';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './navbar.component.html',
    standalone: true,
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  name$: Observable<string> = this.portfolioService.name$;
  constructor(private readonly portfolioService: PortfolioApiService) {}
}
