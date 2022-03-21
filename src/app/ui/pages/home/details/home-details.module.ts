import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentModule } from 'src/app/ui/components/component.module';
import { PipeModule } from 'src/app/ui/pipes/pipe.module';
import {HomeDetailsPage} from './home-details.page';
import {HomeDetailsPageRoutingModule} from './home-details-routing.module';

@NgModule({
  declarations: [HomeDetailsPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    PipeModule,
    HomeDetailsPageRoutingModule
  ],
  exports: [
    HomeDetailsPage
  ],
})
export class HomeDetailsPageModule {}
