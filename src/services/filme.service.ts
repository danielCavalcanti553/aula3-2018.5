import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Injectable } from '@angular/core';
import { Filme } from 'src/model/filme';

@Injectable()
export class FilmeService{
    // verificar se HttpClientModule foi habilitado em app.module.ts
    constructor(private http : HttpClient){
   }

   getFilmes() : Observable<Filme[]>{
    return this.http.get<Filme[]>(`${environment.api}/filmes`);
   }

   getIdFilme(id : string): Observable<Filme[]>{
    return this.http.get<Filme[]>(`${environment.api}/filmes/${id}`);
   }
}