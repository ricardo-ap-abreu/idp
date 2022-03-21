import { TestBed, inject, ComponentFixture } from '@angular/core/testing';

import { AuthenticationGuardService } from './authentication-guard.service';
import { AuthService } from '../auth.service';
import { AuthRepository } from '../../repositories/auth.repository';
import { RemoteGateway } from '../../gateways/remote.gateway';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppContext } from '../../contexts/app-context';
import { ScsAuthorizationTokenParser } from '../../repositories/parsers/scs-authorizatio-token.parser';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import { RemoteGatewayFactory } from '../../gateways/remote-gateway-factory';
import { UserCredentialsParser } from '../../repositories/parsers/user-credentials.parser';
import { DefaultAuthProcessorFactory } from './processors/auth-processor-factory';
import { RouteStrategyFactory } from '../../gateways/route-strategy-factory';

let mockRouter = {
  navigate: jasmine.createSpy('navigate')
} 
let httpMock: HttpTestingController;

describe('AuthenticationGuardService', () => {
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [],
            providers: [AuthenticationGuardService,AuthService,AuthRepository, RemoteGateway, AppContext, ScsAuthorizationTokenParser
                        ,DefaultAuthProcessorFactory,{ provide: Router, useValue: mockRouter },
            RemoteGatewayFactory,UserCredentialsParser, RouteStrategyFactory],
            imports:[HttpClientTestingModule]
        });

        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', inject([AuthenticationGuardService], (service: AuthenticationGuardService) => {
        expect(service).toBeTruthy();
    }));
});
