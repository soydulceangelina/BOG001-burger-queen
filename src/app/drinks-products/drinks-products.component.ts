import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-drinks-products',
  templateUrl: './drinks-products.component.html',
  styleUrls: ['./drinks-products.component.scss']
})
export class DrinksProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void{
  }

  products: Product[] = [
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
    }
  ];
}
