import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntradaModel } from 'src/app/modelos/entrada.model';
import { EntradaService } from 'src/app/servicios/entrada.service';

@Component({
  selector: 'app-entradapost',
  templateUrl: './entradapost.page.html',
  styleUrls: ['./entradapost.page.scss'],
})
export class EntradapostPage implements OnInit {

  constructor(private entradaService: EntradaService, private router: Router) { }

  ngOnInit() {
  }

  agregarNuevaEntrada(id, descripcion, ingredientes, tiempo_preparacion, preparacion, id_categoria) {
    const ENTRADA : EntradaModel = {
      id: id.value,
      descripcion: descripcion.value,
      ingredientes: ingredientes.value,
      tiempo_preparacion: tiempo_preparacion.value,
      preparacion: preparacion.value,
      id_categoria: id_categoria.value
    }
    this.entradaService.agregarEntrada(ENTRADA).subscribe(data =>{
      this.router.navigate([`/entradas`])
    })
  }

}
