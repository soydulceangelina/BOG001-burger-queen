import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Order, status} from '../../../order.model';

@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.scss']
})
export class DeliveredComponent implements OnInit {

  orders: Order[];

  constructor(
    private fs: AngularFirestore,
    ) {
      this.orders = []
     }

     async ngOnInit(): Promise<void> {
      const fsObs = await this.fs.collection('order').ref.orderBy("date").get();
      const dataFs = [];
      fsObs.forEach(a => {if(a.data().status === status.delivered){
        dataFs.push({...a.data(), id: a.id})
      }})
      this.orders = dataFs
    }

}
