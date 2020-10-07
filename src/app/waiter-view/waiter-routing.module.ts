import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WaiterViewComponent} from './components/waiter/waiter-view.component';

const routes: Routes = [
    {
        path: '',
        component: WaiterViewComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class WaiterRoutingModule {

}