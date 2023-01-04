import { Component, OnInit } from '@angular/core';
import { PostreService } from 'src/app/servicios/postre.service';
import { Router } from '@angular/router';
import { PostreModel } from 'src/app/modelos/postre.model';

@Component({
  selector: 'app-postrepost',
  templateUrl: './postrepost.page.html',
  styleUrls: ['./postrepost.page.scss'],
})
export class PostrepostPage implements OnInit {

  constructor(private postreService: PostreService, private router: Router) { }

  ngOnInit() {
  }

  agregarNuevoPostre(id, descripcion, ingredientes, tiempo_preparacion, preparacion, id_categoria) {
    const POSTRE : PostreModel = {
      id: id.value,
      descripcion: descripcion.value,
      ingredientes: ingredientes.value,
      tiempo_preparacion: tiempo_preparacion.value,
      preparacion: preparacion.value,
      id_categoria: id_categoria.value
    }
    this.postreService.agregarPostre(POSTRE).subscribe(data =>{
      this.router.navigate([`/postres`])
    })
  }

}
