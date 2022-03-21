import { Injectable } from '@angular/core';
import { IAuthProcessor } from './auth-processor';
import { DefaultAuthProcessor } from './default-auth-processor';
import { AuthService } from '../../auth.service';
import { AppContext } from 'src/app/ui/contexts/app-context';
import { RouteStrategyFactory } from 'src/app/ui/gateways/route-strategy-factory';

@Injectable()
export class DefaultAuthProcessorFactory {

    constructor(
        private authService: AuthService,
        private appContext: AppContext,
        private routeStrategyFactory: RouteStrategyFactory) {
    }

    createProcessor(): IAuthProcessor {
        return new DefaultAuthProcessor(this.authService, this.appContext, this.routeStrategyFactory);
    }
}