import { Component, OnInit } from '@angular/core';
import { FeaturedProject, PortfolioApiService } from '../../services/portfolio-api.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CommonModule, JsonPipe, NgIf } from '@angular/common';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { MarkdownService } from 'ngx-markdown';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-project-view',
    imports: [CommonModule, AsyncPipe, JsonPipe, NgIf, PageNotFoundComponent],
    providers: [PortfolioApiService],
    templateUrl: './project-view.component.html',
    styleUrl: './project-view.component.css'
})
export class ProjectViewComponent implements OnInit {
  project$: BehaviorSubject<FeaturedProject> = new BehaviorSubject<FeaturedProject>({} as FeaturedProject);
  markdownContent$: BehaviorSubject<string> = new BehaviorSubject<string>('loading...');

  constructor(private readonly portfolioService: PortfolioApiService, private readonly route: ActivatedRoute, private readonly markdownService: MarkdownService, private readonly domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const { slugName } = this.route.snapshot.params;
    this.portfolioService.getFeaturedProjectBySlug(slugName).pipe(
      tap(project => this.project$.next(project))
    ).subscribe(
      (project) => this.parseMarkdownContent$(project.markdownContentFile)
    )
  };

  parseMarkdownContent$(projectMarkdownContentFileUri: string) {
    this.portfolioService.getBlogMarkdownContent$(projectMarkdownContentFileUri).subscribe(
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
