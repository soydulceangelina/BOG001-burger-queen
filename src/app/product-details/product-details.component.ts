import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../core/services/products/product.service';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  // cambiar el modelo de tipado para mostrar la opciones luego
  productSelect: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.productSelect = this.productService.getProduct(id);
    })
  }

}
