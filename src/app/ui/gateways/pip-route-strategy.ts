import { environment } from 'src/environments/environment';
import { IRouteStrategy } from './route-strategy';

export class PipRouteStrategy implements IRouteStrategy {

    redirect(): void {
        location.href = environment.pipUrl;
    }

}
