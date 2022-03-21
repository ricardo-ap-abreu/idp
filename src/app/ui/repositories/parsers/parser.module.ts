import { ModuleWithProviders, NgModule } from '@angular/core';
import { ScsAuthorizationTokenParser } from './scs-authorizatio-token.parser';
import { UserCredentialsParser } from './user-credentials.parser';
import { HealthParser } from './health.parser';
import { UserCredentialsActivationParser } from './user-credentials-activation.parser';
import { PowerBiReportParser } from './powerbi-report-parser';

@NgModule({
})
export class ParserModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ParserModule,
      providers: [
        ScsAuthorizationTokenParser,
        UserCredentialsParser,
        HealthParser,
        UserCredentialsActivationParser,
        PowerBiReportParser,
      ]
    };
  }
}
