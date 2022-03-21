import { Url } from './url';
import { environment } from "../../../../../environments/environment";

export class HealthUrl extends Url {
    constructor (private action: string) {
        super(action);
    }

    getUrl() : string {
        return environment.backendUrl + this.action;
    }
}