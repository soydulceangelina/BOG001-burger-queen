import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-breakfast-products',
  templateUrl: './breakfast-products.component.html',
  styleUrls: ['./breakfast-products.component.scss']
})
export class BreakfastProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: Product[] = [
    {
      id: '1',
      image: '../../assets/image-menu/menu-20200926T011235Z-001/menu/sandwich.jpg',
      title: 'Sandwich de jamón y queso',
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
      title: 'Jugo de frutas natural',
      price: 7.00,
      description: 'Jugo de frutas naturales  en agua o en leche.'
    }
  ];
}
