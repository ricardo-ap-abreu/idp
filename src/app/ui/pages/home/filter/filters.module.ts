import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FiltersModalPage} from './filters-modal-page.component';
import {ComponentModule} from 'src/app/ui/components/component.module';

@NgModule({
  declarations: [FiltersModalPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    ReactiveFormsModule
  ],
  exports: [FiltersModalPage],
})
export class FiltersModalModule {}
