import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postre } from '../interfaces/postre.interface';
import { environment } from 'src/environments/environment';
import { PostreModel } from '../modelos/postre.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostreService {

  path = `${environment.url}/postres`;

  url = 'http://localhost:8080/api/postres/'
  constructor(public http: HttpClient) { }

  cargarPostres() {
    return this.http.get<Postre[]>(this.url);
  }

  agregarPostre(postres: PostreModel): Observable<PostreModel>{
    return this.http.post<PostreModel>(`${this.path}/create`,postres)
  }

  deletePostre(id): Observable<PostreModel>{
    return this.http.delete<PostreModel>(`${this.path}/delete/${id}`);
  }

  editarPostre(postre:PostreModel): Observable<PostreModel>{
    return this.http.put<PostreModel>(`${this.path}/update/${postre.id}`,postre)
  }

  cargarPostre(id:string): Observable<any> {
    return this.http.get(`${this.path}/${id}`)
  }
}
