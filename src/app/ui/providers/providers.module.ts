import {LOCALE_ID, NgModule} from '@angular/core';
import {ModuleWithProviders} from '@angular/compiler/src/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {GlobalHttpExceptionHandller} from '../gateways/global-http-exception-handller';
import {RequestInterceptor} from '../gateways/request-http-interceptor';

@NgModule({

})

export class ProviderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProviderModule,
      providers: [
        {provide: HTTP_INTERCEPTORS, useClass: GlobalHttpExceptionHandller, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true},
        {provide: LOCALE_ID, useValue: 'pt-BR'},
      ]
    };
  }
}

