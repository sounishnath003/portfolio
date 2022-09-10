import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';
import { BlogPost } from 'src/app/template/portfolio-config.interface';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  blogDetail$!: Observable<BlogPost>;
  constructor(
    private route: ActivatedRoute,
    private readonly portfolioService: PortfolioService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') || '';
    this.blogDetail$ = this.portfolioService.getBlogPostBySlug$(slug);
  }
}
