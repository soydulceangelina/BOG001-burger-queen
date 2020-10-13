import { Component, OnInit } from '@angular/core';
import {Product} from '../../../product.model';
import {ProductService} from '../../../core/services/products/product.service';

@Component({
  selector: 'app-waiter-view',
  templateUrl: './waiter-view.component.html',
  styleUrls: ['./waiter-view.component.scss']
})
export class WaiterViewComponent implements OnInit {
  breakfastProducts: Product[] = [];
  lunchProducts: Product[] = [];
  drinksProducts: Product[] = [];

  tab: number

  // inyeccion de dependencias
  constructor(
    private productService: ProductService,
  ) {
    this.tab = 0
  }

  ngOnInit() {
    this.fetchProducts();
  }

  changeTab(tab: number) {
    this.tab = tab
  }

  fetchProducts(){
    this.productService.getAllProducts()
    .subscribe(({ response: products }) => {
      this.breakfastProducts = products.filter(product => product.category === 0);
      this.lunchProducts = products.filter(product => product.category === 1);
      this.drinksProducts = products.filter(product => product.category === 2);
    })
  }
}
