import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postre } from 'src/app/interfaces/postre.interface';
import { PostreService } from 'src/app/servicios/postre.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.page.html',
  styleUrls: ['./postres.page.scss'],
})
export class PostresPage implements OnInit {

  postres : Postre[] = [];
  constructor(private postreService: PostreService, private router: Router, private alert: AlertController, private navController: NavController) { }

  ngOnInit() {
    this.postreService.cargarPostres()
    .subscribe(resp => {
      this.postres = resp['data'];
      return console.log(this.postres);
    }
    )
  }

  ionViewWillEnter(){
    this.postreService.cargarPostres().subscribe(resp => {
      this.postres = resp['data'];
    })
  }

  agregarPostres(){
    this.router.navigate(['/postrepost'])
  }

  async borrar (postres, i) {
    const id = `${ postres.id }`;
    const alert = await this.alert.create(
      {
        header: 'Alto!!',
        message: `¿Seguro(a) que quieres borrar este postre ?<br><strong>${id}</strong></br>`,
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
              this.postreService.deletePostre(postres.id).subscribe(
                resp => {
                  console.log(resp);
                  this.postres.splice(i,1);
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

  editar(postre){
    this.navController.navigateForward(['/editar-postre',postre.id]);
  }
}
