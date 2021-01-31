import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit, HostListener } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('mainHeader', { static: true }) mainHeader: ElementRef;
  @ViewChild('fixingHeightDiv', { static: true }) fixingHeightDiv: ElementRef;
  @ViewChild('menuTogglerBtnDiv', { static: true }) menuTogglerBtnDiv;
  cartShown: boolean = false;

  constructor(private render: Renderer2, private sharedService: SharedService) {
    this.sharedService.ddToggle.subscribe((componentName) => componentName == 'cart' ? this.toggleCart() : '')
    this.sharedService.navToggle.subscribe(() => this.closeMenuOnClick())
  }

  ngAfterViewInit() {
    this.fixFixedNav(this.mainHeader.nativeElement.offsetHeight);
  }

  @HostListener('window:resize') calculatNavHeightOnResize() {
    this.fixFixedNav(this.mainHeader.nativeElement.offsetHeight-10) // fpr fixing padding-bottom;
  }

  fixFixedNav(height:number) {
    this.render.setStyle(this.fixingHeightDiv.nativeElement, 'height', height + 'px')
  }

  toggleCart() {
    this.cartShown = !this.cartShown
  }

  closeMenuOnClick() {
    if (window.outerWidth < 768) {
      this.menuTogglerBtnDiv.nativeElement.click();
    }
  }
}
