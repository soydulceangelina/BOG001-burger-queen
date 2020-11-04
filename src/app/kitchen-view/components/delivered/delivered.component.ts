import { Component, OnInit } from '@angular/core';
import {Order, status} from '../../../core/models/order.model';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import {AngFireService} from '../../../core/services/angFire/ang-fire.service';


@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.scss']
})
export class DeliveredComponent implements OnInit {

  orders$: Observable<Order[]>;

  constructor(
    private angServ: AngFireService
    ) {}


    ngOnInit(){
      this.orders$ = this.angServ.getOrder()
    .pipe(map(p => p.filter(a => a.status === status.delivered) ));
    }

}
