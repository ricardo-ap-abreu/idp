import {NgModule} from '@angular/core';
import {PipeModule} from '../pipes/pipe.module';
import {CoreModule} from '../../core/core.module';
import {DirectiveModule} from '../directives/directive.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {AlertMessageComponent} from './alert-message/alert-message.component';
import {InputTextComponent} from './input-container/input-text/input-text.component';
import {InputContainerComponent} from './input-container/input-container.component';
import {HeaderComponent} from './header/header.component';
import {InputDateComponent} from './input-container/input-date/input-date.component';
import {InputCheckboxComponent} from './input-container/input-checkbox/input-checkbox.component';
import {InputSelectComponent} from './input-container/input-select/input-select.component';
import {AlertModalInputComponent} from './alert-modal-input/alert-modal-input.component';
import {InfiniteListComponent} from './infinite-list/infinite-list.component';

@NgModule({
  declarations: [
    InputContainerComponent,
    InputTextComponent,
    InputDateComponent,
    InputCheckboxComponent,
    InputSelectComponent,
    AlertMessageComponent,
    AlertModalInputComponent,
    HeaderComponent,
    InfiniteListComponent
  ],
  imports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    PipeModule.forRoot(),
    DirectiveModule,
  ],
  exports: [
    InputTextComponent,
    AlertMessageComponent,
    InputSelectComponent,
    InputCheckboxComponent,
    InputSelectComponent,
    InputDateComponent,
    AlertModalInputComponent,
    HeaderComponent,
    InfiniteListComponent
  ],
  entryComponents: [
    AlertModalInputComponent
  ]
})
export class ComponentModule { }
