import { TestBed } from '@angular/core/testing';
import { HealthService } from './health.service';
import { HealthRepository } from '../repositories/health.repository';
import { RemoteGatewayFactory } from '../gateways/remote-gateway-factory';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppContext } from '../contexts/app-context';
import { HealthParser } from '../repositories/parsers/health.parser';
import { configureTestSuite } from 'ng-bullet';

describe('HealthService', () => {
  configureTestSuite(() => {
    TestBed.configureTestingModule({
      providers: [
        HealthRepository,
        RemoteGatewayFactory,
        AppContext,
        HealthParser
      ],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', () => {
    const service: HealthService = TestBed.get(HealthService);
    expect(service).toBeTruthy();
  });
});
