import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import {Order, status} from '../../../core/models/order.model';
import { map} from 'rxjs/operators';
import {AngFireService} from '../../../core/services/angFire/ang-fire.service';



@Component({
  selector: 'app-in-process',
  templateUrl: './in-process.component.html',
  styleUrls: ['./in-process.component.scss']
})
export class InProcessComponent implements OnInit {

  orders$: Observable<Order[]>;

  constructor(
    private angServ: AngFireService
  ) { 
    }


  ngOnInit(): void{
    this.orders$ = this.angServ.getOrder()
    .pipe(map(p => p.filter(a => a.status === status.inProcess) ))
  }

  changeStatusToReady(id: string){
    this.angServ.changeStatusToReady(id);
  }

}
