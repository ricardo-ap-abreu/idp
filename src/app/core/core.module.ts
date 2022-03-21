import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FlexLayoutModule } from '@angular/flex-layout';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CdkModule } from './cdk.module';
//import { TextMaskModule } from '../directives/angular2TextMask';

@NgModule({
    imports: [
        CustomMaterialModule,
        //FlexLayoutModule,
        //AngularFontAwesomeModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        CdkModule,
        //TextMaskModule
    ],
    exports: [
        CustomMaterialModule,
        //FlexLayoutModule,
        //AngularFontAwesomeModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        CdkModule,
        //TextMaskModule
    ]
})
export class CoreModule { }
