import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receta } from '../interfaces/receta.interface';
import { environment } from 'src/environments/environment';
import { RecetaModel } from '../modelos/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  path = `${environment.url}/receta`
  constructor(public http: HttpClient) { }

  cargarRecetas() {
    return this.http.get<Receta[]>(this.path);
  }

  agregarRecetas(receta:RecetaModel): Observable<RecetaModel>{
    return this.http.post<RecetaModel>(`${this.path}/create`,receta)
  }

  deleteReceta(id): Observable<Receta>{
    return this.http.delete<Receta>(`${this.path}/delete/${id}`);
  }

  editarReceta(receta:RecetaModel): Observable<RecetaModel>{
    return this.http.put<RecetaModel>(`${this.path}/update/${receta.id}`,receta)
  }

  cargarReceta(id:string): Observable<any> {
    return this.http.get(`${this.path}/${id}`)
  }
}
 