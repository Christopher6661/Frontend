import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarEntradaPageRoutingModule } from './mostrar-entrada-routing.module';

import { MostrarEntradaPage } from './mostrar-entrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarEntradaPageRoutingModule
  ],
  declarations: [MostrarEntradaPage]
})
export class MostrarEntradaPageModule {}
