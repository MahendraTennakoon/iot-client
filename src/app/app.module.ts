import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductListComponent } from "./dashboard/product-list/product-list.component";
import { HttpModule } from "@angular/http";
import { ChartsModule } from "ng2-charts";
import { ResponseTimeComponent } from "./dashboard/response-time/response-time.component";
import { ProductHealthComponent } from "./dashboard/product-health/product-health.component";
import { AppRoutingModule } from "./app-routing.module";
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductListComponent,
    ResponseTimeComponent,
    ProductHealthComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDYhzzcAV9460gZUGKzGAP-G7_UDzh6QAc"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
