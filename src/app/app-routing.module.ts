import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WaiterViewComponent} from './waiter-view/waiter-view.component';
import {KitchenViewComponent} from './kitchen-view/kitchen-view.component';


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
    path: "cocina",
    component: KitchenViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
