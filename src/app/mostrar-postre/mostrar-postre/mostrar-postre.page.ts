import { Component, OnInit } from '@angular/core';
import { PostreModel } from '../../modelos/postre.model';
import { PostreService } from '../../servicios/postre.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar-postre',
  templateUrl: './mostrar-postre.page.html',
  styleUrls: ['./mostrar-postre.page.scss'],
})
export class MostrarPostrePage implements OnInit {

  postre: PostreModel;
  constructor(private postreService: PostreService, private router: Router, private activatedRoute: ActivatedRoute, http: HttpClient, private navController: NavController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.postreService.cargarPostre(id).subscribe(data => {
        console.log(data);
        this.postre = data['data'];
      })
    })
  }

  cargarPostre(){
    this.navController.navigateForward(['/postres'])
  }

}
