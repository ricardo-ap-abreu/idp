import {Injectable} from '@angular/core';
import {HealthItem} from '../models/domains/health/health-item.model';
import {HealthRepository} from '../repositories/health.repository';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  constructor(private healthRepository: HealthRepository) { }

  public async getItems(): Promise<Array<HealthItem>> {
    try {
      return Promise.resolve(await this.healthRepository.getItems());
    }
    catch (error) {
      return await Promise.reject(error);
    }
  }
}
