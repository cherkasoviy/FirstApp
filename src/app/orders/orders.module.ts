import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {OrdersComponent} from './orders.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class OrdersModule { }
