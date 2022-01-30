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
    transition('search <=> *', [
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
        query(':enter', [style({ opacity: 0 ,transform:'translateY(-5px)'})]),
            query(':leave', [animate('250ms ease-in', style({ opacity: 0,transform:'translateY(10px)' }))]),
            query(':enter', [animate('250ms ease-out', style({ opacity: 1,transform:'translateY(0px)' }))]),
    ]),

    transition('signin => passReset', [
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

    transition('passReset => signin', [
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
        group([
            query(':leave', [animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(20px)' }))]),
            query(':enter', [animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0px)' }))])
        ])
    ]),
]);