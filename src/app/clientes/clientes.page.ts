import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/model/cliente';
import { ClienteService } from 'src/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  // armazenar dados do servidor
  clientes : Cliente[] = [];

  constructor(private clienteServ : ClienteService, 
    private router : Router) { }

  ngOnInit() {
    console.log('ok')
    // chamada ao método getClientes -> buscar clientes no servidor
    // os dados são armazenados em response
    // subscribe é um método de Observable
    this.clientes = [];
    this.clienteServ.getClientes().subscribe(response=>{
       // dados do response para a variável cliente
      this.clientes = response;
      console.log(response)
    })
  }

  goPage(idValue : string){
    this.router.navigate(['/cliente-detalhe',{id : idValue}]);
    
  }

}
