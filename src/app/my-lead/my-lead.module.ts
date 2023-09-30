import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyLeadPageRoutingModule } from './my-lead-routing.module';

import { MyLeadPage } from './my-lead.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyLeadPageRoutingModule
  ],
  declarations: [MyLeadPage]
})
export class MyLeadPageModule {}
