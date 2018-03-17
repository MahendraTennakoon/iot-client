import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProductHealthComponent } from "./dashboard/product-health/product-health.component";
import { ProductListComponent } from "./dashboard/product-list/product-list.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "admin", component: ProductListComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
