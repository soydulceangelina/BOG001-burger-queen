import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {KitchenViewComponent} from './kitchen-view/kitchen-view.component';
import {Page404Component} from './page404/page404.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {
    path:"",
    component: LayoutComponent,
    children:[
      {
        path: "",
        redirectTo: "mesero",
        pathMatch: "full"
      },
      {
        path: "mesero",
        loadChildren: () => import('./waiter-view/waiter.module').then(m => m.WaiterModule)
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
