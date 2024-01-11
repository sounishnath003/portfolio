import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';
import { SocialLink } from 'src/app/template/portfolio-config.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  githubUsername: string = this.portfolioService.githubUsername;
  socialLinks$!: Observable<SocialLink[]>;
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.socialLinks$ = this.portfolioService.getSocialLink(
      'ALL'
    ) as Observable<SocialLink[]>;
  }
}
