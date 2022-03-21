import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AuthRepository } from '../../repositories/auth.repository';
import { RemoteGateway } from '../../gateways/remote.gateway';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppContext } from '../../contexts/app-context';
import { ScsAuthorizationTokenParser } from '../../repositories/parsers/scs-authorizatio-token.parser';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import { RemoteGatewayFactory } from '../../gateways/remote-gateway-factory';
import { UserCredentialsParser } from '../../repositories/parsers/user-credentials.parser';
import { RouteStrategyFactory } from '../../gateways/route-strategy-factory';
// import { MatTooltipModule } from '@angular/material';
import { configureTestSuite } from 'ng-bullet';

const mockRouter = {
  navigate: jasmine.createSpy('navigate')
};

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        AuthService,
        AuthRepository, RemoteGateway, AppContext, ScsAuthorizationTokenParser, RouteStrategyFactory, { provide: Router, useValue: mockRouter },
      RemoteGatewayFactory, UserCredentialsParser],
      imports: [FormsModule, HttpClientTestingModule]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let injector: TestBed;
    let httpMock: HttpTestingController;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
