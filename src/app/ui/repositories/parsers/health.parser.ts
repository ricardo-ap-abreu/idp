import {Injectable} from '@angular/core';
import {AbstractParser} from './parser';
import {HealthItem} from '../../models/domains/health/health-item.model';
import {HealthStatus} from '../../models/domains/health/health-status';

@Injectable()
export class HealthParser extends AbstractParser<Array<HealthItem>> {
    parse(payload: any): HealthItem[]  {
        const items = new Array<HealthItem>();
        const unhealthy = payload.unhealthy;
        const healthy = payload.healthy;

        if (unhealthy) {
            Object.keys(unhealthy).forEach(key => {
                const item: HealthItem = new HealthItem();
                item.setName(key.toString());
                item.setError(unhealthy[key]);
                item.setStatus(HealthStatus.Unhealthy);
                item.setDescription('Clique no ícone ao lado para exibir a descrição do erro.');
                items.push(item);
            });
        }

        if (healthy) {
            Object.keys(healthy).forEach(key => {
                const item: HealthItem = new HealthItem();
                item.setName(key.toString());
                item.setDescription(healthy[key]);
                item.setStatus(HealthStatus.Healthy);
                items.push(item);
            });
        }
        return items;
    }
}
