import { Url } from './url';
import { environment } from "../../../../../environments/environment";

export class ForgotPasswordUrl extends Url {
    constructor (private action: string) {
        super(action);
    }

    getUrl() : string {
        return environment.forgotPasswordUrl + this.action;
    }
}