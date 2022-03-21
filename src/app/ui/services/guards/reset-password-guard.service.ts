import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { RoutePath } from '../../models/domains/route-paths.model';

@Injectable()
export class ResetPasswordGuardService implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!route.queryParams['param']) {
            this.router.navigate(['login'])
            return false;
        }
        return true;
    }
}