import { Component, OnInit } from '@angular/core';
import {TotalService} from '../../../core/services/total/total.service';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Order, status} from '../../../order.model';

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
      status: status.inProcess
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

  subtraction(productId : string){
    const sameId = this.total.find(order => order.id === productId);
    const qty = sameId.quantity;
    if(qty > 1){
      this.total = this.total.map( product => {
        if(product.id === productId){
          product.quantity --;
          this.totalToPay -=  product.price;
          product.priceByQty = product.price * product.quantity
        }
        return product;
      })
    }else{
      this.total = this.total
      .map(t => {
        if (t.id === productId) {
          t.quantity--
        }
        return t
      })
      .filter(subtractionObj => subtractionObj.id !== productId);
      if (this.total.length > 0) {
        this.totalToPay = this.total.map(product => product.priceByQty).reduce((a, b) => a + b)
      } else {
        this.totalToPay = 0
      }
    }
  }

  sum(pId : string){
    const prodId = this.total.find(order => order.id === pId);
    console.log(prodId)
    const qtity = prodId.quantity;
    if(qtity > 0){
      this.total = this.total.map( product => {
        if(product.id === pId){
          product.quantity ++;
          this.totalToPay +=  product.price;
          product.priceByQty = product.price * product.quantity
        }
        return product;
      })
    }
 }
}
