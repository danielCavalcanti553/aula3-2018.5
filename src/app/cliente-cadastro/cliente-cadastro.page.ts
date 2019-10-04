import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/services/cliente.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.page.html',
  styleUrls: ['./cliente-cadastro.page.scss'],
})
export class ClienteCadastroPage implements OnInit {
  
  formGroup : FormGroup;

  constructor(private formBuilder: FormBuilder, 
            private clienteService : ClienteService,
            private toastController : ToastController,
            private router : Router) {

      this.formGroup = this.formBuilder.group({
        id: [],
        nome: ['',[Validators.required]],
        idade: ['',[Validators.required,Validators.min(18),Validators.max(99)]],
        cpf: ['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
        rg: ['',[Validators.required]],
        email: ['',[Validators.required, Validators.email]],
        senha: ['',[Validators.required,Validators.minLength(6)]],
        cep: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
        endereco: ['',Validators.required],
        numero: [''],
        bairro: ['',Validators.required],
        cidade: ['Rio de Janeiro'],
        estado: ['RJ'],
        telefone_fixo: ['',Validators.required],
        celular: ['',Validators.required],
        altura: ['',Validators.required],
        peso: ['',Validators.required],
        img: ['']
      })
    }

  ngOnInit() {
  }

  onSubmit(){
    this.clienteService.insertCliente(this.formGroup.value)
    .subscribe(() =>{
      this.presentToast();
      this.router.navigate(['/clientes']);
    },error => {  
      console.log(error);
    }) 
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cadastrado com sucesso',
      duration: 2000
    });
    toast.present();
  }

}
