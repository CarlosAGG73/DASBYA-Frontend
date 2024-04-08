import { ProcesarPedidoService } from './../../service/procesar-pedido.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../model/Categoria';
import { Producto } from '../../model/Producto';

@Component({
  selector: 'app-procesar-pedido',
  templateUrl: './procesar-pedido.component.html',
  styleUrl: './procesar-pedido.component.css'
})
export class ProcesarPedidoComponent implements OnInit{
  categorias:Categoria[];
  productos:Producto[];
  idCategoriaSelec:number;
  constructor(private procesarPedidoService:ProcesarPedidoService){

  }
  ngOnInit(): void {
    this.procesarPedidoService.categorias().subscribe(c=>this.categorias=c);
    console.log("onInit1");
  }

  productosCategoria(){
    console.log("productosCategoria1");
    this.procesarPedidoService.productosCategorias(this.idCategoriaSelec).subscribe(p=>this.productos=p);
    console.log("productosCategoria2");
  }


}
