import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alert(){
    alert("JJJ")
  }

  gaugeType = "semi";
    gaugeValue = 80;
    gaugeLabel = "Rs.427.50 | 125 Units ";
    gaugeAppendText = "%";
    thick = 50;
  
    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
    };
    public barChartLabels:string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
   
    public barChartData:any[] = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Usage'}
    ];
   
    public barChartPriceData:any[] = [
      {data: [120, 105, 165, 180, 85, 75, 90], label: 'Usage'}
    ];
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
   
    public chartHovered(e:any):void {
      console.log(e);
    }
   
    public randomize():void {
      // Only Change 3 values
      let data = [
        Math.round(Math.random() * 100),
        59,
        80,
        (Math.random() * 100),
        56,
        (Math.random() * 100),
        40];
      let clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data;
      this.barChartData = clone;
      /**
       * (My guess), for Angular to recognize the change in the dataset
       * it has to change the dataset variable directly,
       * so one way around it, is to clone the data, change it and then
       * assign it;
       */
    }
}
