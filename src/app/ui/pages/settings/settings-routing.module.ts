import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
  },
  {
    path: 'health',
    loadChildren: () => import('../health/health.module').then( m => m.HealthPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
