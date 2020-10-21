import { Component, AfterViewInit, ViewChild, Renderer2, ElementRef, AfterViewChecked } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeAnimations } from './route-animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements AfterViewChecked
 {
  constructor(private render: Renderer2, private el: ElementRef) { }

  @ViewChild('loadingDiv', { static: true }) loadingDiv;

  ngAfterViewChecked() {
    this.hidingLoading();
  }

  hidingLoading() {
    setTimeout(() => {
      this.render.addClass(this.loadingDiv.nativeElement, 'animate__animated')
      this.render.addClass(this.loadingDiv.nativeElement, 'animate__fadeOut')
    }, 1000)
    setTimeout(() => {
      this.render.removeChild(this.el.nativeElement, this.loadingDiv.nativeElement)
    }, 2000)
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState'];
  }

}
