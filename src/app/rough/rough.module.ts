import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RoughPageRoutingModule } from './rough-routing.module';

import { RoughPage } from './rough.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoughPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RoughPage]
})
export class RoughPageModule {}
