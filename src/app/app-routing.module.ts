import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakfastProductsComponent } from './breakfast-products/breakfast-products.component';
import { LunchProductsComponent } from './lunch-products/lunch-products.component';
import { DrinksProductsComponent } from './drinks-products/drinks-products.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
