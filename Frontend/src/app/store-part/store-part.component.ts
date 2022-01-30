import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { storeRouteAnimations } from './store-part-animation';

@Component({
    selector: 'app-store-part',
    templateUrl: './store-part.component.html',
    styleUrls: ['./store-part.component.scss'],
    animations: [storeRouteAnimations]
})
export class StoreComponent {
    constructor() { }

    prepareRoute(outlet: RouterOutlet) {
        return outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData['animationState'];
    }

}
