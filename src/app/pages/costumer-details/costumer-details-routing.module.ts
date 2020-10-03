import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostumerDetailsPage } from './costumer-details.page';

const routes: Routes = [
  {
    path: '',
    component: CostumerDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostumerDetailsPageRoutingModule {}
