import { ICredentials } from './credentials.model';

export class ServiceCredentials implements ICredentials {

    token: string;

    constructor(token: string) {
        this.token = token;
    }
}
