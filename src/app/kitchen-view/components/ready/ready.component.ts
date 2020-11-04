import { Component, OnInit } from '@angular/core';
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
    private angServ: AngFireService
  ) {
   }


   ngOnInit(): void{
    this.orders$ = this.angServ.getOrder()
    .pipe(map(p => p.filter(a => a.status === status.ready) ))
    }

  changeStatusToDelivered(id: string){
    this.angServ.changeStatusToDelivered(id);
  }
}
