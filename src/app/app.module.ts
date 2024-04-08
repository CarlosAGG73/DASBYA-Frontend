import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './controller/login/login.component';
import { RegistrarComponent } from './controller/registrar/registrar.component';
import { ProcesarPedidoComponent } from './controller/procesar-pedido/procesar-pedido.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent,
    ProcesarPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
//  bootstrap: [LoginComponent]//debe indicar el componente inicial de la aplicacion
//bootstrap: [RegistrarComponent]//vamos a probar solo el registrar, asi que cambiamos el bootstrap y el indexhtml ponemso el app-registrar
bootstrap: [ProcesarPedidoComponent]//vamos a probar solo el combo/tabla de categorias y carga de productos. cambiamos esto y el index.html "app-procesar-pedido"
})
export class AppModule { }
