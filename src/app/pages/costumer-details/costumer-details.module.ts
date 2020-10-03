import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostumerDetailsPageRoutingModule } from './costumer-details-routing.module';

import { CostumerDetailsPage } from './costumer-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostumerDetailsPageRoutingModule
  ],
  declarations: [CostumerDetailsPage]
})
export class CostumerDetailsPageModule {}
