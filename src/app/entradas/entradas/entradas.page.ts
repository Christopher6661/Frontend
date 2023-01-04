import { Component, OnInit } from '@angular/core';
import { EntradaService } from 'src/app/servicios/entrada.service';
import { Entrada } from '../../interfaces/entrada.interface';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
})
export class EntradasPage implements OnInit {
 
  entradas : Entrada[] = [];
  constructor(private entradaService: EntradaService, private router: Router, private alert: AlertController, private navController: NavController) { }

  ngOnInit() {
    this.entradaService.cargarEntradas()
    .subscribe(resp => {
      this.entradas = resp['data'];
      return console.log(this.entradas);
    }
    )
  }

  ionViewWillEnter(){
    this.entradaService.cargarEntradas().subscribe(resp => {
      this.entradas = resp['data'];
    })
  }

  cargarEntrada(){
    this.router.navigate(['/mostrar-entrada'])
  }

  agregarEntradas(){
    this.router.navigate(['/entradapost'])
  }

  async borrar (entradas, i) {
    const descripcion = `${ entradas.id }`;
    const alert = await this.alert.create(
      {
        header: 'Alto!!',
        message: `¿Seguro(a) que quieres borrar esta entrada ?<br><strong>${descripcion}</strong></br>`,
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
              this.entradaService.deleteEntrada(entradas.id).subscribe(
                resp => {
                  console.log(resp);
                  this.entradas.splice(i,1);
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

  editar(entrada){
    this.navController.navigateForward(['/editar-entrada',entrada.id]);
  }
}
