import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Order, status} from '../../../core/models/order.model';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import {AngFireService} from '../../../core/services/angFire/ang-fire.service';


@Component({
  selector: 'app-ready',
  templateUrl: './ready.component.html',
  styleUrls: ['./ready.component.scss']
})
export class ReadyComponent implements OnInit {

  orders$: Observable<Order[]>;

  constructor(
    private fs: AngularFirestore,
    private angServ: AngFireService
  ) {
   }


   ngOnInit(): void{
    this.orders$ = this.angServ.getOrder()
    .pipe(map(p => p.filter(a => a.status === status.ready) ))
    }

  changeStatusToDelivered(id: string){
    this.fs.doc<Order>(`order/${id}`).update({status: status.delivered });
  }
}
