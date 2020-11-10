import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //  items: Observable<any[]>;

  // constructor(firestore: AngularFirestore) {
  //   this.items = firestore.collection('items').valueChanges();
  // }

  constructor(
    private swUpdate: SwUpdate,
    private messaging: AngularFireMessaging
  ){}

  ngOnInit() {
    this.updatePWA();
    // this.requestPermission();
    // this.listenNotifications();
  }

  updatePWA() {
    this.swUpdate.available.subscribe(value => {
      window.location.reload();
    });
  }
  
  title = 'burgerQueen';
}
