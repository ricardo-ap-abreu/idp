import { Url } from './url';
import { environment } from "../../../../../environments/environment";

export class AuthUserTokenValidationUrl extends Url {
    constructor (private action: string) {
        super(action);
    }

    getUrl() : string {
        return environment.authUserTokenValidationUrl + this.action;
    }
}