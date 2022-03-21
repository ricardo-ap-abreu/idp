import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RemoteGatewayFactory } from './remote-gateway-factory';
import { RouteStrategyFactory } from './route-strategy-factory';


@NgModule({
  imports: [HttpClientModule]
})

export class GatewayModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: GatewayModule,
        providers: [
            RemoteGatewayFactory,
            RouteStrategyFactory
        ]
      };
    }
  }

