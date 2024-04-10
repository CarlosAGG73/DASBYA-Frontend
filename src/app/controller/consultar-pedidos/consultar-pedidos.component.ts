import { Component, OnInit } from '@angular/core';
import { ConsultarPedidosService } from '../../service/consultar-pedidos.service';
import { Pedido } from '../../model/Pedido';
<<<<<<< HEAD
import { MenuComponent } from '../menu/menu.component';
=======
>>>>>>> 02d00d949991990d77447a4fa3ec1fd6cc3861e0

@Component({
  selector: 'app-consultar-pedidos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrl: './consultar-pedidos.component.css'
})
export class ConsultarPedidosComponent implements OnInit{
<<<<<<< HEAD
  usuario:string;
  pedidos:Pedido[];
  constructor(private consultarPedidosService:ConsultarPedidosService,
    private menuComponent:MenuComponent
  ){}
  ngOnInit(): void {
    this.usuario=this.menuComponent.cliente.usuario;
    this.consultarPedidosService.ConsultarPedidos(this.menuComponent.cliente.usuario).subscribe(p=>this.pedidos=p);
=======
  usuario:string = "user1";
  pedidos:Pedido[];
  constructor(private consultarPedidosService:ConsultarPedidosService){}
  ngOnInit(): void {
    this.consultarPedidosService.ConsultarPedidos(this.usuario).subscribe(p=>this.pedidos=p);
>>>>>>> 02d00d949991990d77447a4fa3ec1fd6cc3861e0
  }
}
