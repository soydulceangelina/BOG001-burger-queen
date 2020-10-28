import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import {Order} from '../../../order.model';

@Component({
  selector: 'app-in-process',
  templateUrl: './in-process.component.html',
  styleUrls: ['./in-process.component.scss']
})
export class InProcessComponent implements OnInit {

  orders: Order[];
  // clock: Observable<Date>;

  constructor(
    private fs: AngularFirestore,
  ) { 
    this.orders = []
    }

  async ngOnInit(): Promise<void> {
    const putoObservable = await this.fs.collection('order').get();
    const miDataBella = []
    putoObservable.subscribe(val => val.forEach(a => miDataBella.push({...a.data(), id: a.id})));
    this.orders = miDataBella
  }

}
