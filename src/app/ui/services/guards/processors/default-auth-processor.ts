import { IAuthProcessor } from './auth-processor';
import { AuthService } from '../../auth.service';
import { AppContext } from 'src/app/ui/contexts/app-context';
import { RouteStrategyFactory } from 'src/app/ui/gateways/route-strategy-factory';
import { ServiceCredentials } from 'src/app/ui/models/domains/credentials/service-credentials.model';
import { ActivatedRouteSnapshot } from '@angular/router';

export class DefaultAuthProcessor implements IAuthProcessor {

    constructor(
        private authService: AuthService,
        private appContext: AppContext,
        private routeStrategyFactory: RouteStrategyFactory) {
    }

    async processAuthentication(route: ActivatedRouteSnapshot): Promise<boolean> {
        if (route.queryParams) {
            let token = route.queryParams['t'];
            if (token) {
                var authServiceAuthenticated = await this.authService.isServiceTokenvValid(token);
                if (authServiceAuthenticated) {
                    this.appContext.setServiceCredential(new ServiceCredentials(token));
                } else {
                    this.routeStrategyFactory.createStrategy().redirect();
                }
                return authServiceAuthenticated;
            }
            let hash = route.queryParams['hash'];
            if (hash) {
                await this.authService.switchContext(hash);
            }
        }

        if (this.authService.isUserLogged()) {
            var authenticated = await this.authService.isAuthenticated();
            if (!authenticated) {
                this.routeStrategyFactory.createStrategy().redirect();
                return false;
            }
        } else if (!this.authService.isServiceLogged()) {
            this.routeStrategyFactory.createStrategy().redirect();
            return false;
        }
        return true;
    }
}