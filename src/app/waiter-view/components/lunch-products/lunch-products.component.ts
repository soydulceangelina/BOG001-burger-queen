import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../../product.model';

@Component({
  selector: 'app-lunch-products',
  templateUrl: './lunch-products.component.html',
  styleUrls: ['./lunch-products.component.scss']
})
export class LunchProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() product: Product;

  details(){
    console.log(this.product)
  }

}
