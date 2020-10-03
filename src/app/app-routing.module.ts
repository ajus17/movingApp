import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/costumer-details/costumer-details.module').then( m => m.CostumerDetailsPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/costumer-details/costumer-details.module').then( m => m.CostumerDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
