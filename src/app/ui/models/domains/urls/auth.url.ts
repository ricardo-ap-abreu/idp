import { Url } from './url';
import { environment } from "../../../../../environments/environment";

export class AuthUrl extends Url {
    constructor (private action: string) {
        super(action);
    }

    getUrl() : string {
        return environment.authBaseUrl + this.action;
    }
}