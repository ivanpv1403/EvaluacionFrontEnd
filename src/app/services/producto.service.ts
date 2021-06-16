import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Producto } from "../models/producto";
@Injectable({
    providedIn: 'root'
})
export class ProductoSerivicio{
    myAppUrl = 'https://localhost:44366/';
    myApiUrl = 'api/producto/';
    constructor(private hhttp: HttpClient){}
    guardarProducto(producto: Producto): Observable<Producto>{
        return this.hhttp.post<Producto>(this.myAppUrl + this.myApiUrl + 'guardar', producto);
    }
}

