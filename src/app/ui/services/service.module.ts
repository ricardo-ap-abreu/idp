import {ModuleWithProviders, NgModule} from '@angular/core';
import {LoadingService} from './loading.service';
import {ModalService} from './modal.service';
import {AuthService} from './auth.service';
import {AlertService} from './alert.service';
import {RepositoryModule} from '../repositories/repository.module';
import {UserService} from './user.service';
import {DefaultAuthProcessorFactory} from './guards/processors/auth-processor-factory';
import {NavigationService} from './navigation.service';
import {AlertModalInputService} from './alert-modal-input.service';

@NgModule({
  imports: [RepositoryModule.forRoot()],
})

export class ServiceModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: ServiceModule,
        providers: [
          AlertService,
          AuthService,
          LoadingService,
          ModalService,
          UserService,
          DefaultAuthProcessorFactory,
          NavigationService,
          AlertModalInputService
        ]
      };
    }
  }

