import { Component, OnInit } from '@angular/core';
import { Platofuerte } from 'src/app/interfaces/platofuerte.interface';
import { PlatofuerteService } from 'src/app/servicios/platofuerte.service';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-platosfuertes',
  templateUrl: './platosfuertes.page.html',
  styleUrls: ['./platosfuertes.page.scss'],
})
export class PlatosfuertesPage implements OnInit {

  platosfuertes : Platofuerte[] =[];
  constructor(private platofuerteService: PlatofuerteService, private router: Router, private alert: AlertController, private navController: NavController) { }

  ngOnInit() {
    this.platofuerteService.cargarPlatosFuertes()
    .subscribe(resp => {
      this.platosfuertes = resp['data'];
      return console.log(this.platosfuertes);
    }
    )
  }

  ionViewWillEnter(){
    this.platofuerteService.cargarPlatosFuertes().subscribe(resp => {
      this.platosfuertes = resp['data'];
    })
  }

  agregarPlatosfuertes(){
    this.router.navigate(['/platofuertepost'])
  }

  async borrar (platofuerte, i) {
    const id = `${ platofuerte.id }`;
    const alert = await this.alert.create(
      {
        header: 'Alto!!',
        message: `¿Seguro(a) que quieres borrar este plato fuerte ?<br><strong>${id}</strong></br>`,
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
      this.platofuerteService.deletePlatofuerte(platofuerte.id).subscribe(
            resp => {
                console.log(resp);
                this.platosfuertes.splice(i,1);
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

  editar(platofuerte){
    this.navController.navigateForward(['/editar-platofuerte',platofuerte.id]);
  }

}
