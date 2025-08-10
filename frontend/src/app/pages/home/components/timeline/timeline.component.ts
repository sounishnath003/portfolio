import { AsyncPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PortfolioApiService, ProfessionExperience } from '../../../../services/portfolio-api.service';
import { Observable } from 'rxjs';
import { MarkdownService } from 'ngx-markdown';

@Component({
    selector: 'app-timeline',
    imports: [NgFor, AsyncPipe],
    providers: [PortfolioApiService, MarkdownService],
    templateUrl: './timeline.component.html',
    styleUrl: './timeline.component.css'
})
export class TimelineComponent implements OnInit {
  professionalExperiencesTimeline$: Observable<ProfessionExperience[]> = new Observable<ProfessionExperience[]>();

  constructor(private readonly portfolioService: PortfolioApiService, private readonly markdownService: MarkdownService) { }

  ngOnInit(): void {
    this.professionalExperiencesTimeline$ = this.portfolioService.professionalExperiencesTimeline$;
  }

  parseMarkdownContent(markdownContent: string) {
    return this.markdownService.parse(markdownContent);
  }
}
