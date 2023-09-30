import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealationAapasmeinPageRoutingModule } from './realation-aapasmein-routing.module';

import { RealationAapasmeinPage } from './realation-aapasmein.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealationAapasmeinPageRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [RealationAapasmeinPage]
})
export class RealationAapasmeinPageModule {}
