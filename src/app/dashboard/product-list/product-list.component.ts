import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../product";
import { MetricsWeekly } from "../metrics_weekly";
import { Customer } from "../customer";

@Component({
  selector: "product-list",
  providers: [ProductService],
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Product[];
  customers: Customer[];

  lat: number = 6.929402;
  lng: number = 79.982487;
  lat2: number = 6.987638;
  lng2: number = 80.080434;
  lat3: number = 7.698203;
  lng3: number = 81.406908;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.productService.getProducts().subscribe(data => {
    //   this.products = data;
    // });

    this.productService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }

  //   showDialog(item): void {
  //     alert(
  //       "Response time: " + item.responseTime + "ms.\n" + "Health: " + item.health
  //     );
  //   }
}
