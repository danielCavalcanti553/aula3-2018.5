import { Component, OnInit } from '@angular/core';
import { FilmeService } from 'src/services/filme.service';
import { Filme } from 'src/model/filme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {

  filmes : Filme[]=[];

  constructor(private filmeServ : FilmeService,
    private router : Router) { }

  ngOnInit() {
    this.filmeServ.getFilmes().subscribe(response=>{
      this.filmes = response;
    });
  }

  goPage(idValue : string){
    this.router.navigate(['/filme-detalhe',{id : idValue}]);
  }

}
