import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyLeadPage } from './my-lead.page';

const routes: Routes = [
  {
    path: '',
    component: MyLeadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyLeadPageRoutingModule {}
