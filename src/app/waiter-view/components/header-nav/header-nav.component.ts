import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  @Output() tabChange = new EventEmitter<number>();

  constructor() { }

  handleTabChange(tab:number) {
    this.tabChange.emit(tab);
  }

  ngOnInit(): void {
  }

}
