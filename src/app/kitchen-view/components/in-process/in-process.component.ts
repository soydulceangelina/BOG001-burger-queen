import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import {Order, status} from '../../../order.model';
import { map} from 'rxjs/operators';



@Component({
  selector: 'app-in-process',
  templateUrl: './in-process.component.html',
  styleUrls: ['./in-process.component.scss']
})
export class InProcessComponent implements OnInit {

  orders: Observable<Order[]>;
  // clock: Observable<Date>;

  constructor(
    private fs: AngularFirestore,
  ) { 
    // this.orders = []
    }

  // async ngOnInit(): Promise<void> {
  //   const fsObs = await this.fs.collection('order').ref.orderBy("date").get();
  //   const dataFs = [];
  //   fsObs.forEach(a => {if(a.data().status === status.inProcess){
  //     dataFs.push({...a.data(), id: a.id})
  //   }})
  //   // fsObs.subscribe(val => val.forEach(a => dataFs.push({...a.data(), id: a.id})));
  //   this.orders = dataFs
  // }

    ngOnInit(){
      const fsObs = this.fs.collection('order').valueChanges() as Observable<Order[]>;
      this.orders = fsObs.pipe(map(p => p.filter(a => a.status === status.inProcess) ))
    }

  changeStatusToReady(id:string){
    console.log(id)
    this.fs.doc<Order>(`order/${id}`).update({status: status.ready });
  }

}
