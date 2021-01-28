import { transition, trigger, style, animate, query, group } from '@angular/animations';


export const storeRouteAnimations = trigger('storeRouteAnimations', [

    transition('land <=> author', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            })
        ]),
        query(':enter', [style({ opacity: 0 })]),
        query(':leave', [animate('200ms ease-in', style({ opacity: 0 }))]),
        query(':enter', [animate('300ms ease-out', style({ opacity: 1 }))])
    ]),
    transition('land <=> book', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            })
        ]),
        query(':enter', [style({ opacity: 0 })]),
        query(':leave', [animate('200ms ease-in', style({ opacity: 0 }))]),
        query(':enter', [animate('300ms ease-out', style({ opacity: 1 }))])
    ]),
    transition('book <=> author', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            })
        ]),
        query(':enter', [style({ opacity: 0 })]),
        query(':leave', [animate('200ms ease-in', style({ opacity: 0 }))]),
        query(':enter', [animate('300ms ease-out', style({ opacity: 1 }))])
    ]),
]);