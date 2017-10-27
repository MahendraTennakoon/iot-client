import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../product";

@Component({
    selector: "product-list",
    providers: [ProductService],
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit{
    products: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getProducts()
        .subscribe( data => {
            this.products = data;
        });
    }

    showDialog(item): void {
        alert("Response time: " + item.responseTime + "ms.\n" + "Health: " + item.health);
    }
}
