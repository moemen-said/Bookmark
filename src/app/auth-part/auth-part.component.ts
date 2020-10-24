import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { authAnimations } from './auth-animation';

@Component({
  selector: 'app-auth-part',
  templateUrl: './auth-part.component.html',
  styleUrls: ['./auth-part.component.scss'],
  animations: [authAnimations]
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState'];
  }
}
