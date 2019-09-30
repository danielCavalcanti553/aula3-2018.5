import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.page.html',
  styleUrls: ['./cliente-detalhe.page.scss'],
})
export class ClienteDetalhePage implements OnInit {

  constructor(private actRoute : ActivatedRoute){
   console.log(this.actRoute.snapshot.paramMap.get('id'));
 }

  ngOnInit() {
  }

}
