import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';
import { SocialLink } from 'src/app/template/portfolio-config.interface';

@Component({
  selector: 'app-page-head',
  templateUrl: './page-head.component.html',
  styleUrls: ['./page-head.component.css'],
})
export class PageHeadComponent implements OnInit {
  @Input() title!: string;
  @Input() subtitle!: string;
  socialLinks$: Observable<SocialLink[]> =
    this.portfolioConfigService.getSocialLink('ALL') as Observable<
      SocialLink[]
    >;

  constructor(private readonly portfolioConfigService: PortfolioService) {}

  ngOnInit(): void {}
}
