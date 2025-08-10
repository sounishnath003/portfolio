import { Component, OnInit } from '@angular/core';
import { GetInTouchComponent } from '../../components/get-in-touch/get-in-touch.component';
import { PersonalBlog, PortfolioApiService } from '../../services/portfolio-api.service';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blogs',
    imports: [GetInTouchComponent, AsyncPipe, DatePipe, RouterLink],
    providers: [PortfolioApiService],
    templateUrl: './blogs.component.html',
    styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit {
  personalBlogs$: Observable<PersonalBlog[]> = new Observable<PersonalBlog[]>();

  constructor(private readonly portfolioService: PortfolioApiService) { }

  ngOnInit(): void {
    this.personalBlogs$ = this.portfolioService.personalBlogs$;
  }

  getSlugUrl(blog: PersonalBlog) {
    return `/blogs/${blog.slugName}`;
  }
}
