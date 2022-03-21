import { Url } from './url';
import { environment } from "../../../../../environments/environment";

export class AuthServiceTokenValidationUrl extends Url {
    constructor (private action: string) {
        super(action);
    }

    getUrl() : string {
        return environment.authServiceTokenValidationUrl + this.action;
    }
}
