import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarPlatofuertePageRoutingModule } from './mostrar-platofuerte-routing.module';

import { MostrarPlatofuertePage } from './mostrar-platofuerte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarPlatofuertePageRoutingModule
  ],
  declarations: [MostrarPlatofuertePage]
})
export class MostrarPlatofuertePageModule {}
