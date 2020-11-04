import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-input-section',
  template: `<div class="container">
                <label class="container__label" for="name">
                    <!-- <h3> {{name}} </h3> -->
                    <input placeholder="Cliente" type="text" [(ngModel)]="name">
                </label>
                <label class="container__label" for="table">
                    <!-- <h5> {{table}} </h5> -->
                    <input placeholder="# de mesa" type="text" [(ngModel)]="table">
                </label>
                <button (click)="sendToLocalStorage()">Ok</button>
            </div>`,
  styleUrls: ['./input-section.component.scss']
})
export class InputSectionComponent implements OnInit {

  name = '';
  table = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendToLocalStorage(){
    if (this.name !== '' && this.table !== '') {
      localStorage.setItem('client', this.name);
      localStorage.setItem('table', this.table);
      this.name = '';
      this.table = '';
    }else{
      // alert('Completa los campos')
      Swal.fire({
        icon: 'error',
        text: 'Completa los campos!',
      });
    }
  }
}
