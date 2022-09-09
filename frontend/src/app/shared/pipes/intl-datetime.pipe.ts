import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intlDatetime',
})
export class IntlDatetimePipe implements PipeTransform {
  transform(date: string): string {
    // "2021-05-01" --> "May 1, 2021"
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
