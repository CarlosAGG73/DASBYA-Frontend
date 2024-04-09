import { Component } from '@angular/core';
import { RegistrarService } from '../../service/registrar.service';
import { Cliente } from '../../model/Cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {

  cliente:Cliente=new Cliente();
  constructor(private registrarService:RegistrarService,
    private router:Router){

  }
  registrar(){//registrar se tiene que suscribir al observable que va a devolver el metodo registrar creado en el servicio.
    this.registrarService.registrar(this.cliente).subscribe({
      next:data=>{this.router.navigate(["/login"]),alert("Usuario registrado", )},
      error:err=>alert("Usuario ya existente!. No se pudo registrar!")
    });
  }



}
