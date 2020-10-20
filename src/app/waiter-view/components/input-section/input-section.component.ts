import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.scss']
})
export class InputSectionComponent implements OnInit {

  name = "";
  table = "";

  constructor() { }

  ngOnInit(): void {
  }

  sendToLocalStorage(name, table){
    console.log(this.name, this.table)
  }
}
