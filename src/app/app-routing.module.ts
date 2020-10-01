import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WaiterViewComponent} from './waiter-view/waiter-view.component';
import {KitchenViewComponent} from './kitchen-view/kitchen-view.component';
import {Page404Component} from './page404/page404.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

const routes: Routes = [
  {
    path:"",
    redirectTo: "mesero",
    pathMatch: "full"
  },
  {
    path: "mesero",
    component: WaiterViewComponent
  },
  {
    path: "mesero/:id",
    component: ProductDetailsComponent
  },
  {
    path: "cocina",
    component: KitchenViewComponent
  },
  {
    path: "**",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
