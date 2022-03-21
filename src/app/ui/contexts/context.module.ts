import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppContext } from './app-context';


@NgModule({
})

export class ContextModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: ContextModule,
        providers: [
            AppContext
        ]
      };
    }
  }

