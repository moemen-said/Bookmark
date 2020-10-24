import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('mainHeader', { static: true }) mainHeader: ElementRef;
  @ViewChild('fixingHeightDiv', { static: true }) fixingHeightDiv: ElementRef;

  constructor(private render: Renderer2) { }

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
}
