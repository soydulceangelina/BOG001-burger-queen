import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


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
    if(name !== "" && table !== ""){
      localStorage.setItem('client', this.name);
      localStorage.setItem('table', this.table)
      this.name = "";
      this.table = "";
    }else{
      // alert('Completa los campos')
      Swal.fire({
        icon: 'error',
        text: 'Completa los campos!',
      })
    }
  }
}
