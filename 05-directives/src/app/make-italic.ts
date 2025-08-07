import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appMakeItalic]'
})
export class MakeItalic {
  private el = inject(ElementRef);

  constructor() {
    console.log(this.el);
    this.el.nativeElement.style.fontStyle = 'italic';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.textDecoration = 'underline';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.textDecoration = 'none';
  }

}
