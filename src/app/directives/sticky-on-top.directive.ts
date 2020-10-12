import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[StickyOnTop]'
})
export class StickyOnTopDirective implements OnInit {

  prevScrollPos: number = 0;
  navHight = 0;

  constructor(private el: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    this.navHight = this.el.nativeElement.offsetHeight
  }

  @HostListener('window:scroll') toggleNavbarOnScroll() {
    this.toggleNavbar()
  }
  
  toggleNavbar() {
    if (window.innerWidth > 768) {
      if (this.prevScrollPos > window.pageYOffset || window.pageYOffset < 150) {
        this.render.setStyle(this.el.nativeElement, 'top', 0)
        this.render.setStyle(this.el.nativeElement, 'opacity', 1)
      }
      else {
        this.render.setStyle(this.el.nativeElement, 'top', -this.navHight - 10 + 'px');
        this.render.setStyle(this.el.nativeElement, 'opacity', 0)
      }
      this.prevScrollPos = window.pageYOffset;
    }
  }
}
