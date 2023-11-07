import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'busca',
    pathMatch: 'full'
  },
  {
    path: 'busca',
    loadChildren: () => import('./view/busca/busca.module').then( m => m.BuscaPageModule)
  },
  {
    path: 'busca-details/:type/:id',
    loadChildren: () => import('./view/busca-details/busca-details.module').then( m => m.BuscaDetailsPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
