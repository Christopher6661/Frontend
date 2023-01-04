import { Component, OnInit } from '@angular/core';
import { PostreModel } from '../../modelos/postre.model';
import { PostreService } from '../../servicios/postre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-postre',
  templateUrl: './editar-postre.page.html',
  styleUrls: ['./editar-postre.page.scss'],
})
export class EditarPostrePage implements OnInit {

  titulo='';
  id: any;
  postres = new PostreModel('','','','','','');
  constructor(private postreService: PostreService, private route: ActivatedRoute, private router: Router, private alert: AlertController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.postreService.cargarPostre(id).subscribe( data => {

        this.postres = data['data'];
        console.log(this.postres.id);
        console.log(this.postres.descripcion);
        console.log(this.postres.ingredientes);
        console.log(this.postres.tiempo_preparacion);
        console.log(this.postres.preparacion);
        console.log(this.postres.id_categoria);
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
    console.log(this.postres.id);

        peticion = this.postreService.editarPostre(this.postres);
          console.log(this.postres.id);
          
    peticion.subscribe(
      resp => {
        this.postres.id;
        this.router.navigate(['/postres']);
        console.log(resp);
        console.log(this.postres.id);
        console.log(peticion);
            this.alerta('Editar Postre', this.postres.descripcion, 'Modificación exitosa')
      }
    );
  }

}
