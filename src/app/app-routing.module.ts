import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {RoutePath} from './ui/models/domains/route-paths.model';
import {AuthenticationGuardService} from './ui/services/guards/authentication-guard.service';
import {FiltersModalModule} from './ui/pages/home/filter/filters.module';
import {FiltersModalPage} from './ui/pages/home/filter/filters-modal-page.component';
import { LoginGuardService } from './ui/services/guards/login-guard.service';

const routes: Routes = [
  {
     path: '',
     redirectTo: RoutePath.Tabs,
     pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [LoginGuardService],
    loadChildren: () => import('./ui/pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    canActivate: [AuthenticationGuardService],
    loadChildren: () => import('./ui/pages/tabs/tabs.module').then(m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    // modals
    FiltersModalModule
  ],
  providers: [
    LoginGuardService,
    AuthenticationGuardService
  ],
  exports: [RouterModule],
  entryComponents: [
    FiltersModalPage
  ]
})
export class AppRoutingModule { }
