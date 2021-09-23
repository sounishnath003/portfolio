import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';

@Pipe({
  name: 'markdownToHtml',
})
export class MarkdownToHtmlPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]) {
    if (value.length < 1) return value;
    const parsedValue = marked(value);

    return parsedValue;
  }
}
