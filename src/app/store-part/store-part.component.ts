import { Component } from '@angular/core';
import { headerAnimation } from './store-part-animation';

@Component({
    selector: 'app-store-part',
    templateUrl: './store-part.component.html',
    styleUrls: ['./store-part.component.scss'],
    animations: [headerAnimation]
})
export class StoreComponent {
    constructor() { }


}
