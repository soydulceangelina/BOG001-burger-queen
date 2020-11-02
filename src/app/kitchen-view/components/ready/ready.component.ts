import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Order, status} from '../../../order.model';

@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.scss']
})
export class ReadyComponent implements OnInit {

  orders: Order[];

  constructor(
    private fs: AngularFirestore,
  ) {
    this.orders = []
   }

  async ngOnInit(): Promise<void> {
    const fsObs = await this.fs.collection('order').ref.orderBy("date").get();
    const dataFs = [];
    fsObs.forEach(a => {if(a.data().status === status.ready){
      dataFs.push({...a.data(), id: a.id})
    }})
    this.orders = dataFs
  }

  changeStatusToDelivered(id: string){
    this.fs.doc<Order>(`order/${id}`).update({status: status.delivered });
  }
}
