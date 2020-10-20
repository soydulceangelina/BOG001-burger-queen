import { Component, OnInit } from '@angular/core';
import {TotalService} from '../../../core/services/total/total.service';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Order} from '../../../order.model';

@Component({
  selector: 'app-total-list',
  templateUrl: './total-list.component.html',
  styleUrls: ['./total-list.component.scss']
})
export class TotalListComponent implements OnInit {

  total = [];
  totalToPay = 0
  private collection: AngularFirestoreCollection<any>;

  constructor(
    private totalService: TotalService,
    private firestore: AngularFirestore
  ) {
    this.totalService.total$.subscribe(products =>{
      console.log(products);
      this.total = products;
      if (products.length > 0) {
        this.totalToPay = products.map(product => product.price).reduce((a, b) => a + b)
      }
    });
    this.collection = this.firestore.collection<any>('order');
   }

  ngOnInit(): void {
  }

  sendOrder(): Promise<void> {
    const id = this.firestore.createId();
    const order: Order = {
      id,
      products: this.total,
      total: this.totalToPay,
      date: new Date(),
    };
    this.total = [];
    this.totalToPay = 0;
    return this.collection.doc(id).set(order);
  }
}

