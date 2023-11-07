import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscaDetailsPage } from './busca-details.page';

const routes: Routes = [
  {
    path: '',
    component: BuscaDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscaDetailsPageRoutingModule {}
