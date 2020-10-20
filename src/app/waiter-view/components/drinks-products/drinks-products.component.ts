import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../../product.model';

import {TotalService} from '../../../core/services/total/total.service';

@Component({
  selector: 'app-drinks-products',
  templateUrl: './drinks-products.component.html',
  styleUrls: ['./drinks-products.component.scss']
})
export class DrinksProductsComponent implements OnInit {

  constructor(
    private totalService: TotalService,
  ) { }

  ngOnInit(): void{
  }

  @Input() product: Product;

  // details(){
  //   console.log(this.product)
  // }

  addToTotal(){
    this.totalService.addToTotal(this.product);
  }
}
