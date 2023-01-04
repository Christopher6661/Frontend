import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradapostPageRoutingModule } from './entradapost-routing.module';

import { EntradapostPage } from './entradapost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradapostPageRoutingModule
  ],
  declarations: [EntradapostPage]
})
export class EntradapostPageModule {}
