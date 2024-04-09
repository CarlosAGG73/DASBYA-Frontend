import { ProcesarPedidoService } from './../../service/procesar-pedido.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../model/Categoria';
import { Producto } from '../../model/Producto';
import { CestaItem } from '../../model/CestaItem';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-procesar-pedido',
  templateUrl: './procesar-pedido.component.html',
  styleUrl: './procesar-pedido.component.css'
})
export class ProcesarPedidoComponent implements OnInit{
  categorias:Categoria[];
  productos:Producto[];
  idCategoriaSelec:number;
  cesta:CestaItem[];
  constructor(private procesarPedidoService:ProcesarPedidoService,
    private menuComponent:MenuComponent){

  }
  ngOnInit(): void {
    this.procesarPedidoService.categorias().subscribe(c=>this.categorias=c);
    this.cesta=[];
    console.log("onInit1");
  }

  productosCategoria(){
    console.log("productosCategoria1");
    this.procesarPedidoService.productosCategorias(this.idCategoriaSelec).subscribe(p=>{
      this.productos=p;
      this.actualizarStocks();//metemos esta llamada para solucionar el problema de que al cambiar de categoria, el stock no coincide.
      });
    console.log("productosCategoria2");
  }

  actualizarStocks(){
    this.productos.forEach(p=>{
      this.cesta.forEach(c=>{
        //para cada producto de la categoria seleccionada
        //recorremos la cesta de la compra y si encontramos ese producto
        //en la cesta, debemos actualizar su stock
        if(p.idProducto==c.producto.idProducto){
          p.stock=p.stock-c.unidades;
        }
      })
    })
  }

  agregarProductoCesta(producto:Producto){
    if (producto.unidades <=producto.stock){
      let item= new CestaItem();
      item.producto=producto;
      item.unidades=producto.unidades;
      //Actualizar Stock:
      producto.stock=producto.stock-producto.unidades;
      this.cesta.push(item);
    }else{
      alert("No hay suficiente stock");
    }
  }

  eliminarProductoCesta(pos:number){
    let item=this.cesta[pos];
    this.cesta.splice(pos,1);
    //Actualizar Stock: primero localizamos el producto
    let producto=this.productos.find(p=>p.idProducto==item.producto.idProducto);
    //ahora recuperamos las unidades al stock
    //producto.stock= producto.stock+item.unidades;//lo que hace es concatenarlos asi que le ponemos delante el tipo Number(valor).
    producto.stock= Number(producto.stock)+Number(item.unidades);
  }


  procesarPedido(){
    //ponemos este usuario temporalmente hasta que conectemos todo, ya que no tenemos ahora el servicio de usuarios. luego sera (usuario: sting)
    this.procesarPedidoService.enviarPedido(this.cesta, this.menuComponent.cliente.usuario).subscribe({
      next:r=>alert("Pedido procesado."),
      error:e=>alert("El Pedido no se ha procesado.")
      });
  }

}
