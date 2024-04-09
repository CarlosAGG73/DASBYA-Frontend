import { Component, OnInit } from '@angular/core';
import { ConsultarPedidosService } from '../../service/consultar-pedidos.service';
import { Pedido } from '../../model/Pedido';

@Component({
  selector: 'app-consultar-pedidos',
  templateUrl: './consultar-pedidos.component.html',
  styleUrl: './consultar-pedidos.component.css'
})
export class ConsultarPedidosComponent implements OnInit{
  usuario:string = "user1";
  pedidos:Pedido[];
  constructor(private consultarPedidosService:ConsultarPedidosService){}
  ngOnInit(): void {
    this.consultarPedidosService.ConsultarPedidos(this.usuario).subscribe(p=>this.pedidos=p);
  }
}
