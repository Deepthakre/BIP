import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealationAapasmeinPage } from './realation-aapasmein.page';

const routes: Routes = [
  {
    path: '',
    component: RealationAapasmeinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealationAapasmeinPageRoutingModule {}
