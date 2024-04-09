import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Cliente } from '../../model/Cliente';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario:string;//estas variables son para recoger los parametros que se envian desde la pagina de login.
  password:string;//estas variables son para recoger los parametros que se envian desde la pagina de login.
  client:Cliente;
  constructor(private loginService:LoginService, private menuComponent:MenuComponent){

  }
  login(){
    this.loginService.login(this.usuario, this.password).subscribe(datoCliente=>{
      this.client=datoCliente;
      if(this.client!=null){//usuario valido
        this.menuComponent.cliente= this.client;
        this.menuComponent.enabled=true;
        alert("Usuario autenticado.");
      }
      else{
        alert("Usuario no autenticado.");
      }
    });

  }

}
