import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRefFormPageRoutingModule } from './new-ref-form-routing.module';

import { NewRefFormPage } from './new-ref-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRefFormPageRoutingModule
  ],
  declarations: [NewRefFormPage]
})
export class NewRefFormPageModule {}
