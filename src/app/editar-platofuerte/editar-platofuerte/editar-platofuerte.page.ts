import { Component, OnInit } from '@angular/core';
import { PlatofuerteModel } from '../../modelos/platofuerte.model';
import { PlatofuerteService } from '../../servicios/platofuerte.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-platofuerte',
  templateUrl: './editar-platofuerte.page.html',
  styleUrls: ['./editar-platofuerte.page.scss'],
})
export class EditarPlatofuertePage implements OnInit {

  titulo='';
  id: any;
  platofuerte = new PlatofuerteModel('','','','','','');
  constructor(private platofuerteService: PlatofuerteService, private route: ActivatedRoute,private router: Router, private alert: AlertController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.platofuerteService.cargarPlatofuerte(id).subscribe( data => {

        this.platofuerte = data['data'];
        console.log(this.platofuerte.id);
        console.log(this.platofuerte.descripcion);
        console.log(this.platofuerte.ingredientes);
        console.log(this.platofuerte.tiempo_preparacion);
        console.log(this.platofuerte.preparacion);
        console.log(this.platofuerte.id_categoria);
        console.log(data);
      })
    })
  }

  async alerta(title: string, subtitle: string, message:string){
    const alert = await this.alert.create({
      header: title,
      subHeader: subtitle,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  guardar(){

    let peticion: Observable<any>;
    console.log(this.platofuerte.id);

        peticion = this.platofuerteService.editarPlatofuerte(this.platofuerte);
          console.log(this.platofuerte.id);

    peticion.subscribe(
      resp => {
        this.platofuerte.id;
        this.router.navigate(['/platosfuertes']);
        console.log(resp);
        console.log(this.platofuerte.id);
        console.log(peticion);
          this.alerta('Editar Plato Fuerte', this.platofuerte.descripcion, 'Modificación exitosa')
      }
    );
  }

}
