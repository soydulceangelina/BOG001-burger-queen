import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-waiter-view',
  templateUrl: './waiter-view.component.html',
  styleUrls: ['./waiter-view.component.scss']
})
export class WaiterViewComponent implements OnInit {
  tab: number

  constructor() {
    this.tab = 0
  }

  ngOnInit() {
  }

  changeTab(tab: number) {
    this.tab = tab
  }

}
