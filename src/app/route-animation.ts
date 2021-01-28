import { transition, trigger, style, query, animateChild, animate, group } from '@angular/animations';


export const routeAnimations = trigger('routeAnimations', [

    transition('store <=> signin', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
            })
        ]),
        query(':enter', [style({ opacity: 0, transform: 'translateY(-50px)' })]),
        query(':leave', [animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(20px)' }))]),
        query(':enter', [animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0px)' }))])
    ]),
]);