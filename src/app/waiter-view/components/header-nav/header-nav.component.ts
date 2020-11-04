import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  template: `<nav>
              <button class="child1" (click)="handleTabChange(0)">Desayuno</button>
              <button class="child2" (click)="handleTabChange(1)">Comida</button>
              <button class="child3" (click)="handleTabChange(2)">Bebidas</button>
            </nav>`,
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  @Output() tabChange = new EventEmitter<number>();

  constructor() { }

  handleTabChange(tab: number) {
    this.tabChange.emit(tab);
  }

  ngOnInit(): void {
  }

}
