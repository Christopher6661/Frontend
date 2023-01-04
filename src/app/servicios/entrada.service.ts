import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntradaModel } from '../modelos/entrada.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {
  path = `${environment.url}/entradas`;

 // url = 'http://localhost:8080/api/entradas/'

  constructor(public http: HttpClient) {}

    cargarEntradas(): Observable<any> {
      return this.http.get<any>(this.path);
    }

    agregarEntrada(entradas: EntradaModel): Observable<EntradaModel>{
      return this.http.post<EntradaModel>(`${this.path}/create`,entradas)
    }

    deleteEntrada(id): Observable<EntradaModel>{
      return this.http.delete<EntradaModel>(`${this.path}/delete/${id}`);
    }

    editarEntrada(entrada:EntradaModel): Observable<EntradaModel>{
      return this.http.put<EntradaModel>(`${this.path}/update/${entrada.id}`,entrada)
    }

    cargarEntrada(id:string): Observable<any> {
      return this.http.get(`${this.path}/${id}`);
    }
}
