import { transition, trigger, style, animate } from '@angular/animations';


export const headerAnimation = trigger('headerAnimation', [

    // transition(':enter', [
    //     style({ opacity: 0, transform: 'translateY(-20px)' }),
    //     animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0px)' }))
    // ]),
    // transition(':leave', [
    //     style({ opacity: 1, transform: 'translateY(0px)' }),
    //     animate('500ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
    // ])
]);