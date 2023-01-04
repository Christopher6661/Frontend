import { Component, OnInit } from '@angular/core';
import { EntradaModel } from '../../modelos/entrada.model';
import { EntradaService } from '../../servicios/entrada.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-editar-entrada',
  templateUrl: './editar-entrada.page.html',
  styleUrls: ['./editar-entrada.page.scss'],
})
export class EditarEntradaPage implements OnInit {

  titulo='';
  id: any;
  entradas = new EntradaModel('','','','','','');
  constructor(private entradaService: EntradaService, private route: ActivatedRoute, private router: Router, private alert: AlertController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.entradaService.cargarEntrada(id).subscribe( data => {
      
        this.entradas = data['data'];
        console.log(this.entradas.id);
        console.log(this.entradas.descripcion);
        console.log(this.entradas.ingredientes);
        console.log(this.entradas.tiempo_preparacion);
        console.log(this.entradas.preparacion);
        console.log(this.entradas.id_categoria);
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
    console.log(this.entradas.id);

        peticion = this.entradaService.editarEntrada(this.entradas);
         console.log(this.entradas.id);
       
    peticion.subscribe(
      resp => {
        this.entradas.id;
        this.router.navigate(['/entradas']);
        console.log(resp);
        console.log(this.entradas.id);
        console.log(peticion);
          this.alerta('Editar Etrada', this.entradas.descripcion, 'Modificación exitosa');
      }
    );
  }

}
