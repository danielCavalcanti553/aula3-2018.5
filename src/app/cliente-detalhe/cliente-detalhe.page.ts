import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/services/cliente.service';
import { Cliente } from 'src/model/cliente';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.page.html',
  styleUrls: ['./cliente-detalhe.page.scss'],
})
export class ClienteDetalhePage implements OnInit {

  id : string; // armazena o id enviado pelo paramMap
  cliente : Cliente = new Cliente(); // armazena o Cliente do bd

  constructor(private actRoute : ActivatedRoute,
    private clienteServ : ClienteService){
  // capturando o id
   this.id = this.actRoute.snapshot.paramMap.get('id');
 }

  ngOnInit() {
    //Executando a consulta por id
    this.clienteServ.getIdCliente(this.id).subscribe(response=>{
      this.cliente.setCliente(response);

    })
  }



}
