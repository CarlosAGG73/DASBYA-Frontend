import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './controller/login/login.component';
import { RegistrarComponent } from './controller/registrar/registrar.component';
import { ProcesarPedidoComponent } from './controller/procesar-pedido/procesar-pedido.component';
import { ConsultarPedidosComponent } from './controller/consultar-pedidos/consultar-pedidos.component';
<<<<<<< HEAD
import { MenuComponent } from './controller/menu/menu.component';
import { PortadaComponent } from './controller/portada/portada.component';
=======
>>>>>>> 02d00d949991990d77447a4fa3ec1fd6cc3861e0

@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent,
    ProcesarPedidoComponent,
<<<<<<< HEAD
    ConsultarPedidosComponent,
    MenuComponent,
    PortadaComponent
=======
    ConsultarPedidosComponent
>>>>>>> 02d00d949991990d77447a4fa3ec1fd6cc3861e0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
//bootstrap: [LoginComponent]//debe indicar el componente inicial de la aplicacion
//bootstrap: [RegistrarComponent]//vamos a probar solo el registrar, asi que cambiamos el bootstrap y el indexhtml ponemso el app-registrar
//bootstrap: [ProcesarPedidoComponent]//vamos a probar solo el combo/tabla de categorias y carga de productos. cambiamos esto y el index.html "app-procesar-pedido"
<<<<<<< HEAD
//bootstrap: [ConsultarPedidosComponent]
bootstrap: [MenuComponent]
=======
bootstrap: [ConsultarPedidosComponent]
>>>>>>> 02d00d949991990d77447a4fa3ec1fd6cc3861e0
})
export class AppModule { }
