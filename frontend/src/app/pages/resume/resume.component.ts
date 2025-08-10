import { Component } from '@angular/core';
import { PortfolioApiService } from '../../services/portfolio-api.service';
import { MarkdownService } from 'ngx-markdown';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-resume',
    imports: [AsyncPipe],
    providers: [MarkdownService, PortfolioApiService],
    templateUrl: './resume.component.html',
    styleUrl: './resume.component.css'
})
export class ResumeComponent {
  resume$: Observable<string> = new Observable<string>();

  constructor(private readonly portfolioService: PortfolioApiService, private readonly markdownService: MarkdownService) {
    this.resume$ = this.portfolioService.getResumeMarkdown$();
  }

  parseMarkdown(content: string | null) {
    return this.markdownService.parse(content as string);
  }
}
