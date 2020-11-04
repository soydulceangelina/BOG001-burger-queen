import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../../core/models/product.model';
import {TotalService} from '../../../core/services/total/total.service';

@Component({
  selector: 'app-breakfast-products',
  templateUrl: './breakfast-products.component.html',
  styleUrls: ['./breakfast-products.component.scss']
})
export class BreakfastProductsComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private totalService: TotalService,
  ) { }

  ngOnInit(): void {
  }

  // details(){
  //   console.log(this.product)
  // }

  addToTotal(){
    this.totalService.addToTotal(this.product);
  }
}
