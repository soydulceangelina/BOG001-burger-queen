import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-lunch-products',
  templateUrl: './lunch-products.component.html',
  styleUrls: ['./lunch-products.component.scss']
})
export class LunchProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: Product[] = [
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

}
