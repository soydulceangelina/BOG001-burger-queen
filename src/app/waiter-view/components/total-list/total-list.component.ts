import { Component, OnInit } from '@angular/core';
import {TotalService} from '../../../core/services/total/total.service';

@Component({
  selector: 'app-total-list',
  templateUrl: './total-list.component.html',
  styleUrls: ['./total-list.component.scss']
})
export class TotalListComponent implements OnInit {

  total = [];

  constructor(
    private totalService: TotalService
  ) {
    this.totalService.total$.subscribe(products =>{
      console.log(products);
      this.total = products;
    })
   }

  ngOnInit(): void {
  }

}
