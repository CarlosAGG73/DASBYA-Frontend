import { CestaItem } from "./CestaItem";

export class Pedido{
  idProducto:number;
  usuario:string;
  fecha:Date;
  estado:string;
  elementosPedido:CestaItem[];
}
