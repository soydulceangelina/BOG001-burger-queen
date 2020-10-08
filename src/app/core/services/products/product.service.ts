import { Injectable } from '@angular/core';
import {Product} from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products: Product[] = [
    {
      id: '1',
      image: '../../assets/image-menu/menu-20200926T011235Z-001/menu/sandwich.jpg',
      title: 'Sandwich',
      price: 10.00,
      description: 'Sandwich de jamón y queso, con un toque de mayonesa de la casa.'
    },
    {
      id: '2',
      image: '../../assets/image-menu/menu-20200926T011235Z-001/menu/darkCoffee.jpg',
      title: 'Café americano',
      price: 5.00,
      description: 'El café americano es la mezcla de agua caliente y café procesado en un máquina de Expreso.'
    },
    {
      id: '3',
      image: '../../assets/image-menu/menu-20200926T011235Z-001/menu/milkCoffee.jpg',
      title: 'Café con leche',
      price: 7.00,
      description: 'Consta básicamente de dos ingredientes: café y leche.'
    },
    {
      id: '4',
      image: '../../assets/image-menu/menu-20200926T011235Z-001/menu/juice.jpg',
      title: 'Jugo natural',
      price: 7.00,
      description: 'Jugo de frutas naturales  en agua o en leche.'
    },
    {
      id: '5',
      image: '../../assets/image-menu/menu-20200926T011235Z-001/menu/water.jpg',
      title: 'Agua 500ml',
      price: 5.00,
      description: 'Botella de agua de 500ml.'
    },
    {
      id: '6',
      image: '../../assets/image-menu/menu-20200926T011235Z-001/menu/water.jpg',
      title: 'Agua 750ml',
      price: 7.00,
      description: 'Botella de agua de 750ml.'
    },
    {
      id: '7',
      image: '../../assets/image-menu/menu-20200926T011235Z-001/menu/soda.jpg',
      title: 'Gaseosa 500ml',
      price: 7.00,
      description: 'Botella de gaseosa de 500ml'
    },
    {
      id: '8',
      image: '../../assets/image-menu/menu-20200926T011235Z-001/menu/soda.jpg',
      title: 'Gaseosa 750ml',
      price: 10.00,
      description: 'Botella de gaseosa de 750ml.'
    },
    {
      id: '9',
      image: '../../assets/image-menu/menu-20200926T011235Z-001/menu/burgerSimple.jpg',
      title: 'Hamburguesa simple',
      price: 10.00,
      description: 'Hamburguesa con una sola proteina.'
    },
    {
      id: '10',
      image: '../../assets/image-menu/menu-20200926T011235Z-001/menu/burgerDouble.jpg',
      title: 'Hamburguesa doble',
      price: 15.00,
      description: 'Hamburguesa con dos proteinas.'
    },
    {
      id: '11',
      image: '../../assets/image-menu/menu-20200926T011235Z-001/menu/fries.jpg',
      title: 'Papas fritas',
      price: 5.00,
      description: 'Papas a la francesa.'
    },
    {
      id: '12',
      image: '../../assets/image-menu/menu-20200926T011235Z-001/menu/onion.jpg',
      title: 'Aros de cebolla',
      price: 5.00,
      description: 'Aros de cebolla apanadas en harina.'
    }
  ];

  getAllProducts(){
    return this.products;
  }

  getProduct(id: string){
    return this.products.find(item => id === item.id);
  }
}
