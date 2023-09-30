import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewRefFormPage } from './new-ref-form.page';

const routes: Routes = [
  {
    path: '',
    component: NewRefFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRefFormPageRoutingModule {}
