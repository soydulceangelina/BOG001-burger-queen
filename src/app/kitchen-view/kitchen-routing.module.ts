import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {KitchenViewComponent} from './components/kitchen/kitchen-view.component';

const routes: Routes = [
    {
        path: '',
        component: KitchenViewComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class KitchenRoutingModule{}
