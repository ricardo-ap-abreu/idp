import {environment} from 'src/environments/environment';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {PipRouteStrategy} from './pip-route-strategy';
import {LoginRouteStrategy} from './login-route-strategy';
import { HomeRouteStrategy } from './home-route-strategy';
import {IRouteStrategy} from './route-strategy';

@Injectable()
export class RouteStrategyFactory {

    constructor(private router: Router) { }

    createStrategy(success: boolean = false): IRouteStrategy {
      if (!success) {
        const redirectOnExitingApp = environment.redirectOnExitingApp;
        if (redirectOnExitingApp === 'pip') {
          return new PipRouteStrategy();
        }
        return new LoginRouteStrategy(this.router);
      }
      
      return new HomeRouteStrategy(this.router);
    }
}
