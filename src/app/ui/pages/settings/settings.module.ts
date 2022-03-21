import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { ComponentModule } from '../../components/component.module';

@NgModule({
  declarations: [SettingsPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule,
    ComponentModule,
  ],
  exports: [SettingsPage]
})
export class SettingsPageModule {}
