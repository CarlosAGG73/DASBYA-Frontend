import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ConsultarPedidosService {

  constructor(private http:HttpClient) { }

  ConsultarPedidos(usuario:string):Observable<any>{
    let url="http://localhost:8082/pedidos";
    let params=new HttpParams();
    params=params.append("usuario", usuario);
    return this.http.get(url,{"params":params});
  }
}