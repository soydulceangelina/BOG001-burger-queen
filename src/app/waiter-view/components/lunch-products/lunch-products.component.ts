import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Product} from '../../../core/models/product.model';

import Swal from 'sweetalert2';

import {TotalService} from '../../../core/services/total/total.service';

@Component({
  selector: 'app-lunch-products',
  templateUrl: './lunch-products.component.html',
  styleUrls: ['./lunch-products.component.scss']
})
export class LunchProductsComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private fs: AngularFirestore,
    private totalService: TotalService,
  ) { }

  ngOnInit(): void {
  }


  addToTotal(){
    if (this.product.id === 'HeWtfLtGwLfNlPWE7wJ3' || this.product.id === 'rXwwGWvHHQXMm0KtiDyb'){
      const options = {};
      this.fs.collection('types').get().subscribe(res => {
        res.forEach(item => {
          options[item.id] = item.data().type;
        });
        Swal.fire({
          title: 'De que quieres tu hamburguesa?',
          input: 'select',
          inputOptions: {
            options
          },
          inputPlaceholder: 'Tu proteina',
          showCancelButton: true,
        })
        .then(({ value }) => {
          if (!this.product.type) {
            this.product.type = [];
          }
          this.product.type.push(value);
          this.totalService.addToTotal(this.product);
        });
      });
    }else{
      this.totalService.addToTotal(this.product);
    }
  }
}
