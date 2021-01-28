import { Directive, ElementRef, HostListener, Input } from '@angular/core';

import { SharedService } from '../services/shared.service'

@Directive({
  selector: '[ddHide]'
})
export class DdHideDirective {

  @Input() componentName: string;
  constructor(private el: ElementRef, private sharedService: SharedService) { }

  @HostListener('document:click', ['$event']) onClick(event) {
    if (!this.el.nativeElement.contains(event.target)) {
      let ddElement = this.el.nativeElement.querySelector('.ddHide')
      if (ddElement.classList.contains('show')) {
        this.sharedService.ddToggle.next(this.componentName);
      }
    }
  }

}
