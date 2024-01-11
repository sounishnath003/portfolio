import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';
import { BlogPost } from 'src/app/template/portfolio-config.interface';

@Component({
  selector: 'app-recent-blogs',
  templateUrl: './recent-blogs.component.html',
  styleUrls: ['./recent-blogs.component.css'],
})
export class RecentBlogsComponent implements OnInit {
  @Input() recentBlogPosts$!: Observable<BlogPost[]>;
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {}
}
