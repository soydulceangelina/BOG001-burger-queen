import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { OrderTransformPipe } from './pipes/order/order-transform.pipe';

@NgModule({
  declarations: [
    OrderTransformPipe,
    HeaderLogoComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    OrderTransformPipe,
    HeaderLogoComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
