import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(
    private render: Renderer2,
    private el: ElementRef,
    private authService: AuthService
  ) {}

  // @ViewChild('loadingDiv', { static: true }) loadingDiv;

  // hidingLoading() {
  //   setTimeout(() => {
  //     this.render.addClass(this.loadingDiv.nativeElement, 'animate__animated')
  //     this.render.addClass(this.loadingDiv.nativeElement, 'animate__fadeOut')
  //   }, 1000)
  //   setTimeout(() => {
  //     this.render.removeChild(this.el.nativeElement, this.loadingDiv.nativeElement)
  //   }, 2000)
  // }

  ngAfterViewInit(): void {
    // hidingLoading()
    this.authService.autoLogin();
  }
}
