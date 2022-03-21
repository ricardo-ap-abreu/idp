import {HealthItem} from '../models/domains/health/health-item.model';
import {HealthParser} from './parsers/health.parser';
import {RemoteGatewayFactory} from '../gateways/remote-gateway-factory';
import {BackendUrl} from '../models/domains/urls/back-end.url';

export class HealthRepository {
    constructor(private remoteGatewayFactory: RemoteGatewayFactory,
                private healthParser: HealthParser) {}
    public async getItems(): Promise<Array<HealthItem>> {
      try {
        const headers = {
          'Content-Type': 'application/json'
        };
        const remoteGateway = this.remoteGatewayFactory.createDefaultRemoteGateway();
        const data = await remoteGateway.getWithHeaders(new BackendUrl('/api/health'), headers);
        return this.healthParser.parse(data);
      } catch (error) {
        return await Promise.reject(error);
      }
    }


}
