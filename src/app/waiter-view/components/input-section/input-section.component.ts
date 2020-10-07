import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.scss']
})
export class InputSectionComponent implements OnInit {

  name = "nombre del comensal";
  table = "número de mesa"

  constructor() { }

  ngOnInit(): void {
  }

}
