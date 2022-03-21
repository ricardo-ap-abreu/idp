import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ContextModule } from './ui/contexts/context.module';
import { ServiceModule } from './ui/services/service.module';
import { CoreModule } from './core/core.module';
import { ProviderModule } from './ui/providers/providers.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    ContextModule.forRoot(),
    ServiceModule.forRoot(),
    ProviderModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
