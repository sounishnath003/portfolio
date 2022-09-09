import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as Markdown from 'marked';

@Pipe({
  name: 'markdownParser',
})
export class MarkdownParserPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string | null): SafeHtml {
    if (!value) {
      return this.sanitizer.bypassSecurityTrustHtml('');
    }
    value = Markdown.marked(value, { sanitize: true });
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
