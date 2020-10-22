import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {SharedModule} from '../shared/shared.module';

import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { BreakfastProductsComponent } from './components/breakfast-products/breakfast-products.component';
import { LunchProductsComponent } from './components/lunch-products/lunch-products.component';
import { DrinksProductsComponent } from './components/drinks-products/drinks-products.component';
import { InputSectionComponent } from './components/input-section/input-section.component';
import {WaiterViewComponent} from './components/waiter/waiter-view.component';
import {TotalListComponent} from './components/total-list/total-list.component';

import {WaiterRoutingModule} from './waiter-routing.module';

@NgModule({
    declarations: [
        BreakfastProductsComponent,
        LunchProductsComponent,
        DrinksProductsComponent,
        HeaderNavComponent,
        InputSectionComponent,
        WaiterViewComponent,
        TotalListComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        WaiterRoutingModule,
        SharedModule
    ]
})
export class WaiterModule {

}