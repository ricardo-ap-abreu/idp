import {NgModule} from '@angular/core';

@NgModule({
  declarations: [],
  exports: []
})

export class PipeModule {
  static forRoot() {
    return {
      ngModule: PipeModule,
      providers: [],
    };
  }
}
