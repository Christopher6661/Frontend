import { Component, OnInit } from '@angular/core';
import { PlatofuerteModel } from '../../modelos/platofuerte.model';
import { PlatofuerteService } from '../../servicios/platofuerte.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar-platofuerte',
  templateUrl: './mostrar-platofuerte.page.html',
  styleUrls: ['./mostrar-platofuerte.page.scss'],
})
export class MostrarPlatofuertePage implements OnInit {

  platofuerte: PlatofuerteModel;
  constructor(private platofuerteService: PlatofuerteService, private router: Router, private activadeRoute: ActivatedRoute, http: HttpClient, private navController: NavController) { }

  ngOnInit() {
    this.activadeRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.platofuerteService.cargarPlatofuerte(id).subscribe(data => {
        console.log(data);
        this.platofuerte = data['data'];
      })
    })
  }

  cargarPlatofuerte(){
    this.navController.navigateForward(['/platosfuertes'])
  }

}
