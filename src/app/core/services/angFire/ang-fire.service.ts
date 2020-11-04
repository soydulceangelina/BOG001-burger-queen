import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import {Order, status} from '../../../core/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class AngFireService {

  orders$: Observable<Order[]>;

  constructor(
    private fs: AngularFirestore,
  ){
    this.orders$ = this.fs.collection('order').valueChanges() as Observable<Order[]>;
  }

  getOrder(): Observable<Order[]>{
    return this.orders$;
  }

  changeStatusToReady(id: string){
    this.fs.doc<Order>(`order/${id}`).update({status: status.ready });
  }

  changeStatusToDelivered(id: string){
    this.fs.doc<Order>(`order/${id}`).update({status: status.delivered });
  }
}
