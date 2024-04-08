import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Cliente } from '../../model/Cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario:string;//estas variables son para recoger los parametros que se envian desde la pagina de login.
  password:string;//estas variables son para recoger los parametros que se envian desde la pagina de login.
  client:Cliente;
  constructor(private loginService:LoginService){

  }
  login(){
    this.loginService.login(this.usuario, this.password).subscribe(datoCliente=>{
      this.client=datoCliente;
      if(this.client!=null){//usuario valido
        alert("Usuario autenticado.")
      }
      else{
        alert("Usuario no autenticado.")
      }
    });

  }

}
