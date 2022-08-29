import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  avatarURL$!: Observable<string>;
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.avatarURL$ = this.portfolioService.avatarURL$;
  }
}
