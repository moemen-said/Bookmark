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
  cartShown: boolean = false;

  constructor(private render: Renderer2, private sharedService: SharedService) {
    this.sharedService.ddToggle.subscribe((componentName) => componentName == 'cart' ? this.toggleCart() : '')
  }

  ngAfterViewInit() {
    this.fixFixedNav();
  }

  @HostListener('window:resize') calculatNavHeightOnResize() {
    this.fixFixedNav();
  }

  fixFixedNav() {
    let headerHeight = this.mainHeader.nativeElement.offsetHeight;
    this.render.setStyle(this.fixingHeightDiv.nativeElement, 'height', headerHeight + 'px')
  }

  toggleCart() {
    this.cartShown = !this.cartShown
  }
}
