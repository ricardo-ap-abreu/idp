import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginGuardService implements CanActivate {
    constructor(
        private router: Router, 
        private authService: AuthService
        ) {
    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        if (await this.authService.isAuthenticated()) {
            this.router.navigate([environment.redirectToHome]);
        }
        
        return true;        
    }
}