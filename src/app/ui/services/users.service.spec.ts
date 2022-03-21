import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { UserRepository } from '../repositories/user.repository';
import { RemoteGateway } from '../gateways/remote.gateway';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from "@angular/router";
import { AppContext } from '../contexts/app-context';
import { ScsAuthorizationTokenParser } from '../repositories/parsers/scs-authorizatio-token.parser';
import { RemoteGatewayFactory } from '../gateways/remote-gateway-factory';
import { ResetPasswordRepository } from '../repositories/reset-password.repository';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { configureTestSuite } from 'ng-bullet';
import { UserCredentialsActivationParser } from '../repositories/parsers/user-credentials-activation.parser';

let mockRouter = {
  navigate: jasmine.createSpy('navigate')
}

describe('UserService', () => {

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [UserService, RemoteGatewayFactory, UserRepository, RemoteGateway, AppContext, ScsAuthorizationTokenParser, { provide: Router, useValue: mockRouter },
        ResetPasswordRepository, UserCredentialsActivationParser]
    })
  });


  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
