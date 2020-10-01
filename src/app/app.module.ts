import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { BreakfastProductsComponent } from './breakfast-products/breakfast-products.component';
import { LunchProductsComponent } from './lunch-products/lunch-products.component';
import { DrinksProductsComponent } from './drinks-products/drinks-products.component';
import { WaiterViewComponent } from './waiter-view/waiter-view.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { KitchenViewComponent } from './kitchen-view/kitchen-view.component';
import { InputSectionComponent } from './input-section/input-section.component';
import { Page404Component } from './page404/page404.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    BreakfastProductsComponent,
    LunchProductsComponent,
    DrinksProductsComponent,
    WaiterViewComponent,
    HeaderNavComponent,
    KitchenViewComponent,
    InputSectionComponent,
    Page404Component,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
