import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthRepository } from './auth.repository';
import { ParserModule } from './parsers/parser.module';
import { GatewayModule } from '../gateways/gateway.module';
import { UserRepository } from './user.repository';
import { ResetPasswordRepository } from './reset-password.repository';
import { HealthRepository } from './health.repository';


@NgModule({
  imports: [
    ParserModule.forRoot(),
    GatewayModule.forRoot()
  ]
})

export class RepositoryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RepositoryModule,
      providers: [
        AuthRepository,
        UserRepository,
        ResetPasswordRepository,
        HealthRepository
      ]
    };
  }
}
