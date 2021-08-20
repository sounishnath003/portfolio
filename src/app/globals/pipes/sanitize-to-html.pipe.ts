import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sanitizeToHtml'
})
export class SanitizeToHtmlPipe implements PipeTransform {

  transform(value: string) {
    const parsed = new DOMParser().parseFromString(value, 'text/html').body;
    return parsed.innerHTML;
  }

}
