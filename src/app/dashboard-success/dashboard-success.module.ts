import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardSuccessPageRoutingModule } from './dashboard-success-routing.module';

import { DashboardSuccessPage } from './dashboard-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardSuccessPageRoutingModule
  ],
  declarations: [DashboardSuccessPage]
})
export class DashboardSuccessPageModule {}
