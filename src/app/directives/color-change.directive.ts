import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorChange]',
})
export class ColorChangeDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.setColor('');
  }
  setColor(color) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background', color);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor('green');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setColor('silver');
  }
}
