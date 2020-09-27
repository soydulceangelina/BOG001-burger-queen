import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakfastProductsComponent } from './breakfast-products/breakfast-products.component';
import { LunchProductsComponent } from './lunch-products/lunch-products.component';
import { DrinksProductsComponent } from './drinks-products/drinks-products.component';


const routes: Routes = [
  {
    path: "desayuno",
    component: BreakfastProductsComponent
  },
  {
    path: "comida",
    component: LunchProductsComponent
  },
  {
    path: "bebidas",
    component: DrinksProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
