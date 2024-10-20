import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MarkdownService } from 'ngx-markdown';
import { Observable, map } from 'rxjs';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  @Input()
  name$!: Observable<string>;
  @Input()
  attributes$!: Observable<string>;
  @Input()
  profileSummary$!: Observable<string>;

  @Input()
  workedAtCompanies$!: Observable<{ companyName: string; image: string }[]>;

  constructor(private readonly markdownService: MarkdownService) { }

  resumeDownload$() {
    const date = new Date();
    return this.name$.pipe(
      map(
        (d) =>
          `${d.replaceAll(
            ' ',
            ''
          )}_Resume_${date.getFullYear()}${date.getMonth()}${date.getDate()}.pdf`
      )
    );
  }

  markdownCompile(content: string) {
    return this.markdownService.parse(content);
  }
}
