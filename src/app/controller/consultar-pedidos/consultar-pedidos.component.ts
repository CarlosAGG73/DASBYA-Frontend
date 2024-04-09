import { Component, OnInit } from '@angular/core';
import { ConsultarPedidosService } from '../../service/consultar-pedidos.service';
import { Pedido } from '../../model/Pedido';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-consultar-pedidos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrl: './consultar-pedidos.component.css'
})
export class ConsultarPedidosComponent implements OnInit{
  usuario:string;
  pedidos:Pedido[];
  constructor(private consultarPedidosService:ConsultarPedidosService,
    private menuComponent:MenuComponent
  ){}
  ngOnInit(): void {
    this.usuario=this.menuComponent.cliente.usuario;
    this.consultarPedidosService.ConsultarPedidos(this.menuComponent.cliente.usuario).subscribe(p=>this.pedidos=p);
  }
}
