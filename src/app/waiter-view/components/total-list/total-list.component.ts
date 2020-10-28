import { Component, OnInit } from '@angular/core';
import {TotalService} from '../../../core/services/total/total.service';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Order} from '../../../order.model';

import Swal from 'sweetalert2';

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
        this.totalToPay = products.map(product => product.priceByQty).reduce((a, b) => a + b)
      }
    });
    this.collection = this.firestore.collection<any>('order');
   }

  ngOnInit(): void {
  }

  sendOrder(): Promise<void> {
    const id = this.firestore.createId();
    const client = localStorage.getItem('client');
    const table = localStorage.getItem('table');

    const order: Order = {
      id,
      products: this.total,
      total: this.totalToPay,
      date: new Date(),
      client,
      table,
    };
    this.total = [];
    this.totalService.products = []
    this.totalToPay = 0;
    Swal.fire(
      'Enviado!',
      'Tu pedido se esta preparando!',
      'success'
    )
    return this.collection.doc(id).set(order);
  }
}

