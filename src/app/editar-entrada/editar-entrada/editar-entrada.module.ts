import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarEntradaPageRoutingModule } from './editar-entrada-routing.module';

import { EditarEntradaPage } from './editar-entrada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarEntradaPageRoutingModule
  ],
  declarations: [EditarEntradaPage]
})
export class EditarEntradaPageModule {}
