import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarPostrePageRoutingModule } from './mostrar-postre-routing.module';

import { MostrarPostrePage } from './mostrar-postre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarPostrePageRoutingModule
  ],
  declarations: [MostrarPostrePage]
})
export class MostrarPostrePageModule {}
