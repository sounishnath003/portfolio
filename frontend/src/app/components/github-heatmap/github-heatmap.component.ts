import { Component, OnInit, ViewChild } from '@angular/core';
import GithubCalendar from 'github-calendar';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';

@Component({
  selector: 'app-github-heatmap',
  templateUrl: './github-heatmap.component.html',
  styleUrls: ['./github-heatmap.component.css'],
})
export class GithubHeatmapComponent implements OnInit {
  @ViewChild('calendar', { static: true }) calendar!: HTMLDivElement;
  constructor(private readonly portfolioService: PortfolioService) {}

  ngOnInit(): void {
    GithubCalendar(
      '.calendar',
      this.portfolioService.getSocialLink('Github').username || 'Null',
      {
        responsive: true,
        tooltips: true,
      }
    );
  }
}
