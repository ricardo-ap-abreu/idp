import { Router } from '@angular/router';
import { IRouteStrategy } from './route-strategy';
import { environment } from 'src/environments/environment';



export class HomeRouteStrategy implements IRouteStrategy {

    constructor(private router: Router) { }

    redirect(): void {
        this.router.navigate([environment.redirectToHome]);
    }

}