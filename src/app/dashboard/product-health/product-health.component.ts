import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from "../product";

@Component({
  selector: 'app-product-health',
  templateUrl: './product-health.component.html',
  styleUrls: ['./product-health.component.css'],
  providers: [ProductService]
})
export class ProductHealthComponent implements OnInit {
  products: Product[];
  timestamps: number[] = [];
  healthValues: number[] = [];
  public chartLabels: Array<any> = [];
  public chartType: string = 'bar';

  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: true,
    title: {
      display: true,
      text: 'Product Health',
      fontColor: '#FEC44F',
      fontSize: 24
    },
    legend: {
      display: true,
      labels: {
        fontColor: '#FEC44F'
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: "#F8F8DD", // this here
        },
      }],
      yAxes: [{
        display: true,
        gridLines: {
          display: false,
        },
        ticks: {
          fontColor: "#F8F8DD",
          min: 0
        }
      }],
    }
  };

  constructor(private productService: ProductService) { }

  public chartData: Array<any> = [
    { data: this.healthValues, label: 'Equella' }
  ];

  ngOnInit() {
    this.productService.getProducts()
    .subscribe( data => {
        this.products = data;
        for (let test_result of data) {
          this.timestamps.push(test_result.timestamp);
          this.healthValues.push(test_result.health);
        }

        this.chartLabels = this.timestamps;
    });
  }

}
