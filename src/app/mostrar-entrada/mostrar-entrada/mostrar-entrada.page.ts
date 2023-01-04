import { Component, OnInit } from '@angular/core';
import { EntradaService } from '../../servicios/entrada.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { RecetaModel } from '../../modelos/receta.model';
import { EntradaModel } from '../../modelos/entrada.model';
import { Entrada } from '../../interfaces/entrada.interface';

@Component({
  selector: 'app-mostrar-entrada',
  templateUrl: './mostrar-entrada.page.html',
  styleUrls: ['./mostrar-entrada.page.scss'],
})
export class MostrarEntradaPage implements OnInit {

  entrada: Entrada;
  constructor(private entradaService: EntradaService, private router: Router, private activatedRoute: ActivatedRoute, 
    http: HttpClient, private navController: NavController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
        this.entradaService.cargarEntrada(id).subscribe(data => {
          console.log(data);
          this.entrada = data['data'];
          
        })
    })
  }

  cargarEntrada(){
    this.navController.navigateForward(['/entradas'])
  }
}
