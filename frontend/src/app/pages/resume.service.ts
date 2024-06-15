import { Injectable } from '@angular/core';
import Katex, { KatexOptions } from 'katex';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  constructor() {}

  renderToString(options?: KatexOptions): string {
    return Katex.renderToString('$f^2(x)+2f(x)+c$', options);
  }
}
