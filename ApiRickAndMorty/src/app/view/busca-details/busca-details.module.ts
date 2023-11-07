import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscaDetailsPageRoutingModule } from './busca-details-routing.module';

import { BuscaDetailsPage } from './busca-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscaDetailsPageRoutingModule
  ],
  declarations: [BuscaDetailsPage]
})
export class BuscaDetailsPageModule {}
