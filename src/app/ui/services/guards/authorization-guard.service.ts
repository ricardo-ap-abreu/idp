import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { RoutePath } from '../../models/domains/route-paths.model';

@Injectable()
export class AuthorizationGuardService implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!route.data || !route.data.hasOwnProperty('requiredActions')) {
            return false;
        }

        // check if your user has permission to acess the current route

        return true;
    }
}
