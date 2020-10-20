import { Injectable } from '@angular/core';
// libreria que añade principios reactivos
import {BehaviorSubject} from 'rxjs';

import {Product} from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  private products: Product[] = [];
  private total = new BehaviorSubject<Product[]>([]);// lo inicializo en cero, con un array vacio

  //variable publica, cualquier componente o modulo se puede suscribir a sus cambios.
  total$ = this.total.asObservable();

  constructor() { }
  // metodo para agregar el producto
  addToTotal(product: Product){
    // practica de no mutacion, y agregamos el ultimo producto
    this.products = [...this.products, product];
    // con el next le notificamos a los componentes que esten suscritos qie hubo un cambio, y se envia la copia actualizada del array de productos.
    this.total.next(this.products);
  }

  
}
