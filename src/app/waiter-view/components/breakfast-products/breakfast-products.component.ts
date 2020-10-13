import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../../product.model';

@Component({
  selector: 'app-breakfast-products',
  templateUrl: './breakfast-products.component.html',
  styleUrls: ['./breakfast-products.component.scss']
})
export class BreakfastProductsComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

  details(){
    console.log(this.product)
  }
}
