import { ActivatedRouteSnapshot } from '@angular/router';

export interface IAuthProcessor {

    processAuthentication(route: ActivatedRouteSnapshot): Promise<boolean>;

}