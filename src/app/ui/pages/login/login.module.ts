import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentModule } from 'src/app/ui/components/component.module';
import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentModule,
    LoginPageRoutingModule
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule {}
