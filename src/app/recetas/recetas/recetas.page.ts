import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecetaService } from '../../servicios/receta.service';
import { Receta } from '../../interfaces/receta.interface';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {

  recetas : Receta[] = [];

  constructor(private recetaService: RecetaService, private router: Router, private alert: AlertController, private navController: NavController) { }

  ngOnInit() {
    this.recetaService.cargarRecetas()
    .subscribe(resp => {
      this.recetas = resp['data'];
    
    }
    )
  
  }

  ionViewWillEnter(){
    this.recetaService.cargarRecetas().subscribe(resp => {
      this.recetas = resp['data'];
    })
  }

  agregarRecetas(){
    this.router.navigate(['/agregar-receta'])
  }

  async borrar (receta, i) {
    const Categoria = `${ receta.categoria }`;
    const alert = await this.alert.create(
      {
        header: 'Alto!!',
        message: `¿Seguro(a) que quieres borrar esta receta ?<br><strong>${Categoria}</strong></br>`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (resp) =>{

            }
          },
          {
            text: 'Confirmar',
            handler: (resp) =>{
              this.recetaService.deleteReceta(receta.id).subscribe(
                resp => {
                  console.log(resp);
                  this.recetas.splice(i,1);
                },
                err => console.log(err)
              );
            }
          }
        ]
      }
    );
    await alert.present();
  }

  editar(receta){
    this.navController.navigateForward(['/editar-receta',receta.id]);
  }
}
