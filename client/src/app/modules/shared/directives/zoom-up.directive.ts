import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomUp]',
})
export class ZoomUpDirective {
  private readonly element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.scaleUp();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.scaleDown();
  }

  scaleUp() {
    this.element.nativeElement.style.transform = 'scale(1.1)';
  }

  scaleDown() {
    this.element.nativeElement.style.transform = 'scale(1)';
  }
}
