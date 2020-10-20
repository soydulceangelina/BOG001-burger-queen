import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../../product.model';

import {TotalService} from '../../../core/services/total/total.service';

@Component({
  selector: 'app-lunch-products',
  templateUrl: './lunch-products.component.html',
  styleUrls: ['./lunch-products.component.scss']
})
export class LunchProductsComponent implements OnInit {

  constructor(
    private totalService: TotalService,
  ) { }

  ngOnInit(): void {
  }

  @Input() product: Product;

  // details(){
  //   console.log(this.product)
  // }

  addToTotal(){
    this.totalService.addToTotal(this.product);
  }
}
