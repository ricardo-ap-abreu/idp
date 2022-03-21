import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { DefaultAuthProcessorFactory } from './processors/auth-processor-factory';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthenticationGuardService implements CanActivate {

    constructor(
        private authService: AuthService,
        private defaultAuthProcessorFactory: DefaultAuthProcessorFactory) {
    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        const authProcessor = this.defaultAuthProcessorFactory.createProcessor();
        return authProcessor.processAuthentication(route);
    }
}