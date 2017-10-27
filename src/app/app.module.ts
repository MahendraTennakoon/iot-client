import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './dashboard/product-list/product-list.component';
import { HttpModule } from "@angular/http";
import { ChartsModule } from 'ng2-charts';
import { ResponseTimeComponent } from './dashboard/response-time/response-time.component';
import { ProductHealthComponent } from './dashboard/product-health/product-health.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductListComponent,
    ResponseTimeComponent,
    ProductHealthComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
