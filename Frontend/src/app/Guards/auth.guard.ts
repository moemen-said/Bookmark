import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, UrlTree, CanActivateChild } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return true
    }
}