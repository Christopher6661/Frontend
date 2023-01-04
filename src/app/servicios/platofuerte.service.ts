import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PlatofuerteModel } from '../modelos/platofuerte.model';

@Injectable({
  providedIn: 'root'
})
export class PlatofuerteService {

  path = `${environment.url}/platofuerte`;

  //url = 'http://localhost:8080/api/platofuerte/'

  constructor(public http: HttpClient) { }

  cargarPlatosFuertes(): Observable<any>{
    return this.http.get<any>(this.path);
  }

  agregarPlatofuerte(platofuerte: PlatofuerteModel): Observable<PlatofuerteModel>{
    return this.http.post<PlatofuerteModel>(`${this.path}/create`,platofuerte)
  }

  deletePlatofuerte(id): Observable<PlatofuerteModel>{
    return this.http.delete<PlatofuerteModel>(`${this.path}/delete/${id}`);
  }

  editarPlatofuerte(platofuerte:PlatofuerteModel): Observable<PlatofuerteModel>{
    return this.http.put<PlatofuerteModel>(`${this.path}/update/${platofuerte.id}`,platofuerte)
  }

  cargarPlatofuerte(id:string): Observable<any> {
    return this.http.get(`${this.path}/${id}`)
  }
}
