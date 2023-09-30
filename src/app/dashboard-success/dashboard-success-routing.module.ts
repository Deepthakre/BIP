import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardSuccessPage } from './dashboard-success.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardSuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardSuccessPageRoutingModule {}
