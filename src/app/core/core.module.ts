import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductService} from './services/products/product.service';
import { environment } from '../../environments/environment';

import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [
    ProductService
  ]
})
export class CoreModule { }
