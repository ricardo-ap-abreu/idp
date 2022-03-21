import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { TabsPage } from './tabs.page';
import { RoutePath } from '../../models/domains/route-paths.model';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren:  () => import('../home/home.module').then( m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren:  () => import('../settings/settings.module').then( m => m.SettingsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: RoutePath.Home,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
