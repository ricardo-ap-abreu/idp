import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { RoutePath } from '../../models/domains/route-paths.model';

@Injectable()
export class RegisterPasswordGuardService implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!route.queryParams['t']) {
            this.router.navigate(['login'])
            return false;
        }
        return true;
    }
}