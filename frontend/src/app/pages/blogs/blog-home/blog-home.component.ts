import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';
import { BlogPost } from 'src/app/template/portfolio-config.interface';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css'],
})
export class BlogHomeComponent implements OnInit {
  private tagSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  blogsPosts$!: Observable<BlogPost[]>;
  tagsFromBlogPosts$: Observable<string[]> =
    this.portfolioService.tagsFromBlogPosts$;

  constructor(private readonly portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.tagSubject.subscribe((selectedTag: string) => {
      this.blogsPosts$ = this.portfolioService.getAllBlogsByTag$(selectedTag);
    });
  }
  updateTag(tag: string) {
    this.tagSubject.next(tag);
  }

  get isTagSelected() {
    return this.tagSubject.value !== '';
  }

  get selectedTag() {
    return this.tagSubject.value;
  }
}
