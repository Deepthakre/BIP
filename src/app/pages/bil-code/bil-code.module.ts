import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BILCodePageRoutingModule } from './bil-code-routing.module';

import { BILCodePage } from './bil-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BILCodePageRoutingModule
  ],
  declarations: [BILCodePage]
})
export class BILCodePageModule {}
