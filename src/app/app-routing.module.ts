import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {ProductDetailsComponent} from './product-details/product-details.component';
import {LayoutComponent} from './layout/layout.component';

import {AdminGuard} from './admin.guard';

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
        canActivate: [AdminGuard],
        loadChildren: () => import('./kitchen-view/kitchen.module').then(m => m.KitchenModule)
      },
      {
        path: "**",
        loadChildren: () => import('./page404/page404.module').then(m => m.Page404Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
