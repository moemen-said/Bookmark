import { transition, trigger, style, query, animate, group } from '@angular/animations';


export const authAnimations = trigger('authAnimations', [

    transition('signup <=> signin', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [style({ opacity: 0, transform: 'translateY(-50px)' })]),
        query(':leave', [animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(-50px)' }))]),
        query(':enter', [animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0px)' }))]),
    ]),

    transition('signin => passReset, signup=>passReset', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [style({ opacity: 0, transform: 'translateY(-50px)scale(1)' })]),
        query(':leave', [animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(-50px)scale(.8)' }))], { optional: true }),
        query(':enter', [animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0px)scale(1)' }))]),
    ]),

    transition('passReset  => signin,passReset => signup', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [style({ opacity: 0, transform: 'scaleX(1)' })]),
        query(':leave', [animate('200ms ease-out', style({ opacity: 0, transform: 'scaleX(1.1)' }))]),
        query(':enter', [animate('300ms ease-out', style({ opacity: 1, transform: 'scaleX(1)' }))])
    ]),
]);