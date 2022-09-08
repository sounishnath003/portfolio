import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';

@Component({
  selector: 'app-recent-blogs',
  templateUrl: './recent-blogs.component.html',
  styleUrls: ['./recent-blogs.component.css'],
})
export class RecentBlogsComponent implements OnInit {
  recentBlogPosts$ = this.portfolioService.recentBlogs$;
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {}
}
