import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../shared/shared.module';

import {KitchenViewComponent} from './components/kitchen/kitchen-view.component';
import {KitchenRoutingModule} from './kitchen-routing.module';
import { InProcessComponent } from './components/in-process/in-process.component';
import { ReadyComponent } from './components/ready/ready.component';
import { DeliveredComponent } from './components/delivered/delivered.component';

@NgModule({
    declarations: [
        KitchenViewComponent,
        InProcessComponent,
        ReadyComponent,
        DeliveredComponent
    ],
    imports: [
        CommonModule,
        KitchenRoutingModule,
        SharedModule
    ],
    exports: []
})
export class KitchenModule {

}