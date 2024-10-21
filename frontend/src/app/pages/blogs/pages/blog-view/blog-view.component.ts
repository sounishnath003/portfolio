import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CommonModule, JsonPipe, NgIf } from '@angular/common';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { MarkdownService } from 'ngx-markdown';
import { DomSanitizer } from '@angular/platform-browser';
import { PersonalBlog, PortfolioApiService } from '../../../../services/portfolio-api.service';
import { PageNotFoundComponent } from '../../../page-not-found/page-not-found.component';

@Component({
  selector: 'app-blog-view',
  standalone: true,
  imports: [CommonModule, AsyncPipe, JsonPipe, NgIf, PageNotFoundComponent],
  providers: [PortfolioApiService],
  templateUrl: './blog-view.component.html',
  styleUrl: './blog-view.component.css'
})
export class BlogViewComponent implements OnInit {
  blog$: BehaviorSubject<PersonalBlog> = new BehaviorSubject<PersonalBlog>({} as PersonalBlog);
  markdownContent$: BehaviorSubject<string> = new BehaviorSubject<string>('loading...');

  constructor(private readonly portfolioService: PortfolioApiService, private readonly route: ActivatedRoute, private readonly markdownService: MarkdownService, private readonly domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const { slugName } = this.route.snapshot.params;
    this.portfolioService.getBlogBySlug(slugName).pipe(
      tap(blog => this.blog$.next(blog))
    ).subscribe(
      (blog) => this.parseMarkdownContent$(blog.markdownContentFile)
    )
  };

  parseMarkdownContent$(blogMarkdownContentFileUri: string) {
    this.portfolioService.getBlogMarkdownContent$(blogMarkdownContentFileUri).subscribe(
      markdownContent => this.markdownContent$.next(
        this.markdownService.parse(markdownContent, { disableSanitizer: false, }).toString()
      ));
  }

  sanitizeHtml(html: string | null) {
    if (html === null) return "";
    const s = this.domSanitizer.bypassSecurityTrustHtml(html)
    return s;

  }
}
