import { Observable } from 'rxjs';
import { Cliente } from 'src/model/cliente';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Injectable } from '@angular/core';


@Injectable()
export class ClienteService{
    // verificar se HttpClientModule foi habilitado em app.module.ts
    constructor(private http : HttpClient){
   }

   getClientes() : Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${environment.api}/clientes`);
   }

   getIdCliente(id : string): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${environment.api}/clientes/${id}`);
   }

   insertCliente(obj : Cliente){
    return this.http.post(
      `${environment.api}/clientes`,obj,
      {
        observe: 'response',
        responseType: 'text'
      } 
    );
  }

  deleteCliente(id : string){
    return this.http.delete(`${environment.api}/clientes/${id}`);
  }
}