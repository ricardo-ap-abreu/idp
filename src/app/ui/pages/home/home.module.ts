import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {ComponentModule} from '../../components/component.module';
import {HomeDetailsPageModule} from './details/home-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HomeDetailsPageModule,
    ComponentModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
