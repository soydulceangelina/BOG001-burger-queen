import { Component, OnInit, Input } from '@angular/core';
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

  @Input() product: Product;

  details(){
    console.log(this.product.id)
  }
}
