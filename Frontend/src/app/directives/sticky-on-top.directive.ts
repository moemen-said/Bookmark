import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[showOnScroll]',
})
export class ShowOnScrollDirective implements OnInit {
  prevScrollPos = 0;
  header = this.el.nativeElement;
  siblingDiv = null;

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    const parent = this.header.parentElement;
    parent.insertAdjacentHTML('afterBegin', '<div style="display:none"></div>');
    this.siblingDiv = parent.children[0];
    this.render.setStyle(
      this.siblingDiv,
      'height',
      this.header.offsetHeight + 'px'
    );
  }

  @HostListener('window:scroll') toggleNavbarOnScroll() {
    this.toggleNavbar();
  }

  toggleNavbar() {
    if (this.prevScrollPos > window.pageYOffset) {
      // Scroll to top
      this.render.setStyle(this.header, 'top', '10px');
      this.render.setStyle(this.header, 'opacity', '1');
      setTimeout(() => {
        this.render.setStyle(this.header, 'position', 'fixed');
        this.render.setStyle(this.siblingDiv, 'display', 'block');
      }, 100);
    }
    else {
      // scroll to bottom
      this.render.setStyle(this.header, 'top', '-15px');
      this.render.setStyle(this.header, 'opacity', '0');
      setTimeout(() => {
        this.render.setStyle(this.header, 'position', 'relative');
        this.render.setStyle(this.siblingDiv, 'display', 'none');
      }, 100);
    }
    this.prevScrollPos = window.pageYOffset;
  }
}
