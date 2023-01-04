import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatofuerteService } from '../../servicios/platofuerte.service';
import { PlatofuerteModel } from '../../modelos/platofuerte.model';

@Component({
  selector: 'app-platofuertepost',
  templateUrl: './platofuertepost.page.html',
  styleUrls: ['./platofuertepost.page.scss'],
})
export class PlatofuertepostPage implements OnInit {

  constructor(private platofuerteService: PlatofuerteService, private router: Router) { }

  ngOnInit() {
  }

  agregarNuevoPlatofuerte(id, descripcion, ingredientes, tiempo_preparacion, preparacion, id_categoria) {
    const PLATOFUERTE : PlatofuerteModel = {
      id: id.value,
      descripcion: descripcion.value,
      ingredientes: ingredientes.value,
      tiempo_preparacion: tiempo_preparacion.value,
      preparacion: preparacion.value,
      id_categoria: id_categoria.value
    }
    this.platofuerteService.agregarPlatofuerte(PLATOFUERTE).subscribe(data =>{
      this.router.navigate([`/platosfuertes`])
    })
  }

}
