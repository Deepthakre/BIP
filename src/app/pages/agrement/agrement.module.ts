import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgrementPageRoutingModule } from './agrement-routing.module';

import { AgrementPage } from './agrement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgrementPageRoutingModule
  ],
  declarations: [AgrementPage]
})
export class AgrementPageModule {}
