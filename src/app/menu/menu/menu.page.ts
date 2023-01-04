import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataServiceService } from 'src/app/servicios/data.service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private menuCtrl: MenuController, private dataService: DataServiceService ) { }

  ngOnInit() {

    this.componentes = this.dataService.getMenuOpts();
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }



}
