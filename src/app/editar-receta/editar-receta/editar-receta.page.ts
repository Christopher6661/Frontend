import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetaService } from '../../servicios/receta.service';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { RecetaModel } from '../../modelos/receta.model';

@Component({
  selector: 'app-editar-receta',
  templateUrl: './editar-receta.page.html',
  styleUrls: ['./editar-receta.page.scss'],
})
export class EditarRecetaPage implements OnInit {

  titulo='';
  id: any;
  receta = new RecetaModel('','');
  constructor(private recetaService: RecetaService, private route: ActivatedRoute, private router: Router, private alert: AlertController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => { 
      const id = paramMap.get('id');
      this.recetaService.cargarReceta(id).subscribe( data => {
        this.receta = data['data'];
       

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
  this.receta.id 
    peticion = this.recetaService.editarReceta(this.receta);
  
  peticion.subscribe(
    resp => {
      this.receta.id
        this.alerta('Editar Receta', this.receta.Categoria,'Modificado exitosamente');
        this.router.navigate(['/recetas']);
        
    }
  )
 }

}
