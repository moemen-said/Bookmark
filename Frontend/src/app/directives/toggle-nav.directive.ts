import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Directive({
  selector: '[toggleNav]'
})
export class ToggleNavDirective {

  constructor(private el: ElementRef,private sharedService:SharedService) { }

  @HostListener('document:click', ['$event']) onClick(event) {
    if (!this.el.nativeElement.contains(event.target) && this.el.nativeElement.classList.contains('show')) {
      this.sharedService.navToggle.next();
    }
  }

}
