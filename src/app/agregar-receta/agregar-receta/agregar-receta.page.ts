import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/interfaces/receta.interface';
import { RecetaService } from '../../servicios/receta.service';
import { Router } from '@angular/router';
import { RecetaModel } from '../../modelos/receta.model';

@Component({
  selector: 'app-agregar-receta',
  templateUrl: './agregar-receta.page.html',
  styleUrls: ['./agregar-receta.page.scss'],
})
export class AgregarRecetaPage implements OnInit {

  constructor(private router: Router, private recetaService: RecetaService) { }

  ngOnInit() {
  }

  agregarNuevaReceta(id, Categoria){
    const RECETA : RecetaModel = {
      id: id.value,
      Categoria: Categoria.value
    }
    this.recetaService.agregarRecetas(RECETA).subscribe(data =>{
      this.router.navigate(['/recetas'])
      console.log(RECETA)
    })
  }
 

}
