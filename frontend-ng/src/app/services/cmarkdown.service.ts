import { Injectable } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Injectable({
  providedIn: 'root'
})
export class CmarkdownService {

  constructor(private readonly markdownService: MarkdownService) { }

  compile(markdown: string) {
    return this.markdownService.parse(markdown, { decodeHtml: true, emoji: true, markedOptions: { async: false } });
  }
}
