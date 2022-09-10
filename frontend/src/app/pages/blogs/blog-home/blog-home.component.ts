import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';
import { BlogPost } from 'src/app/template/portfolio-config.interface';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css'],
})
export class BlogHomeComponent implements OnInit {
  blogsPosts$: Observable<BlogPost[]> = this.portfolioService.allBlogs$;
  constructor(private readonly portfolioService: PortfolioService) {}

  ngOnInit(): void {}
}
