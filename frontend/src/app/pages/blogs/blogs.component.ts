import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';
import { BlogPost } from 'src/app/template/portfolio-config.interface';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  blogsPosts$: Observable<BlogPost[]> = this.portfolioService.allBlogs$;
  constructor(private readonly portfolioService: PortfolioService) {}

  ngOnInit(): void {}
}
