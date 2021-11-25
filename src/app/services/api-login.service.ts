import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UsuarioI} from '../interface/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  constructor(private http: HttpClient) { }

  crearUsuario(form:UsuarioI):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/usuario/',form,
    {headers:new HttpHeaders({"content-type":"application/json"})});
  }
}
