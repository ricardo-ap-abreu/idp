import { Url } from './url';
import { environment } from 'src/environments/environment';

export class ReportUrl extends Url {
    constructor (private action: string) {
        super(action);
    }

    getUrl() : string {
        return environment.reportUrl + this.action;
    }
}

export class ReportServiceUrl extends Url {
    constructor (private action: string) {
        super(action);
    }

    getUrl() : string {
        return environment.reportServiceUrl + this.action;
    }
}