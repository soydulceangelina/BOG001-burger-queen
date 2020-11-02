import { Injectable } from '@angular/core';
// libreria que añade principios reactivos
import {BehaviorSubject} from 'rxjs';

import {Product} from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  products: Product[] = [];
  private total = new BehaviorSubject<Product[]>([]);// lo inicializo en cero, con un array vacio

  //variable publica, cualquier componente o modulo se puede suscribir a sus cambios.
  total$ = this.total.asObservable();

  constructor() { }
  // metodo para agregar el producto
  addToTotal(ourProduct: Product, option?: string): void{
    const ourProductIdx = this.products.findIndex(product => product.id === ourProduct.id);
    if (ourProductIdx !== -1) {
      this.products[ourProductIdx].quantity++;
      this.products[ourProductIdx].priceByQty = this.products[ourProductIdx].price * this.products[ourProductIdx].quantity
    } else {
      ourProduct.quantity = 1;
      ourProduct.priceByQty = ourProduct.price
      this.products = [...this.products, ourProduct];
    }
    this.products = this.products.filter(product => product.quantity > 0)
    // practica de no mutacion, y agregamos el ultimo producto
    // con el next le notificamos a los componentes que esten suscritos qie hubo un cambio, y se envia la copia actualizada del array de productos.
    this.total.next(this.products);
  }

  
}
