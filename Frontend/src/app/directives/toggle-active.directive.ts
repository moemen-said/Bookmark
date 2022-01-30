import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[toggleActive]'
})
export class ToggleActiveDirective {

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click') toggleActiveClass() {
    this.el.nativeElement.classList.contains('active') ?
      this.render.removeClass(this.el.nativeElement, 'active') :
      this.render.addClass(this.el.nativeElement, 'active')
  }

}
