import { Router } from '@angular/router';
import { RoutePath } from '../models/domains/route-paths.model';
import { IRouteStrategy } from './route-strategy';



export class LoginRouteStrategy implements IRouteStrategy {

    constructor(private router: Router) { }

    redirect(): void {
        this.router.navigate([RoutePath.Login]);
    }

}