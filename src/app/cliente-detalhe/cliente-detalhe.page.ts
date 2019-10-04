import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/services/cliente.service';
import { Cliente } from 'src/model/cliente';
import { ToastController } from '@ionic/angular';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.page.html',
  styleUrls: ['./cliente-detalhe.page.scss'],
})
export class ClienteDetalhePage implements OnInit {

  id : string; // armazena o id enviado pelo paramMap
  cliente : Cliente = new Cliente(); // armazena o Cliente do bd

  constructor(private actRoute : ActivatedRoute,
    private clienteServ : ClienteService,
    private toastController : ToastController,
    private router : Router){
  // capturando o id
   this.id = this.actRoute.snapshot.paramMap.get('id');
 }

  ngOnInit() {
    
    //Executando a consulta por id
    this.clienteServ.getIdCliente(this.id).subscribe(response=>{
      this.cliente.setCliente(response);

    })
  }

 

  onExcluir(){
    this.clienteServ.deleteCliente(this.id).subscribe(()=>{
      this.presentToast();
      this.router.navigate(['/clientes']);
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Excluído com sucesso',
      duration: 2000
    });
    toast.present();
  }



}
