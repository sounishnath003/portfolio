import { Pipe, PipeTransform } from '@angular/core';
import { Recommendation } from 'src/app/template/portfolio-config.interface';

@Pipe({
  name: 'cardTitle',
})
export class CardTitlePipe implements PipeTransform {
  transform(value: Recommendation): string {
    return `${value.fullname} ∙ ${value.designation}, ${value.origanization}`;
  }
}
