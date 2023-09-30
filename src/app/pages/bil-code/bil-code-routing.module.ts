import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BILCodePage } from './bil-code.page';

const routes: Routes = [
  {
    path: '',
    component: BILCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BILCodePageRoutingModule {}
