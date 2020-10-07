import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { KitchenViewComponent } from './kitchen-view/kitchen-view.component';
import { Page404Component } from './page404/page404.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {LayoutComponent} from './layout/layout.component';
import {ProductDetailsComponent} from './product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    KitchenViewComponent,
    Page404Component,
    HeaderLogoComponent,
    SideBarComponent,
    LayoutComponent,
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
