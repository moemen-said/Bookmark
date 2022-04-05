import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[toggleEdit]',
})
export class ToggleEditDirective {
  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('click') collapseEditDiv() {
    const state = this.el.nativeElement.dataset.state;
    const parent = this.el.nativeElement.closest('.dataCont');
    const editDivs = parent.querySelectorAll('.dataCont-innerDataEdit');
    if(state == 0){ 
      this.el.nativeElement.innerHTML = 'cancel';
      this.el.nativeElement.dataset.state = 1;
      editDivs.forEach(element => {
        this.render.setStyle(element, 'display' , 'flex');
      });
    }
    else{
      this.el.nativeElement.innerHTML = 'edit';
      this.el.nativeElement.dataset.state = 0;
      editDivs.forEach(element => {
        this.render.setStyle(element, 'display' , 'none');
      });
    }
  }
}
