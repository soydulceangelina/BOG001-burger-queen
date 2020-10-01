import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { from } from 'rxjs';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      const productSelect = this.productService.getProduct(id);
      console.log(productSelect)
    })
  }

}
