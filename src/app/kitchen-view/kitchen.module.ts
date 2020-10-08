import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {KitchenViewComponent} from './components/kitchen/kitchen-view.component';
import {KitchenRoutingModule} from './kitchen-routing.module';

@NgModule({
    declarations: [
        KitchenViewComponent
    ],
    imports: [
        CommonModule,
        KitchenRoutingModule
    ],
    exports: []
})
export class KitchenModule {

}