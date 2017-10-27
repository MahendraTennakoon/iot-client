import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-response-time',
  templateUrl: './response-time.component.html',
  styleUrls: ['./response-time.component.css'],
  providers: [DashboardService]
})
export class ResponseTimeComponent implements OnInit {

  timestamps: number[] = [];
  domElements: number[] = [];

  public lineChartLabels: Array<any> = [];

  constructor(private dashboardService: DashboardService) { }

  getTestResults() {
    this.dashboardService.getLoadTimes()
      .subscribe(res => {
        for (let test_result of res) {
          this.timestamps.push(test_result.timestamp);
          this.domElements.push(test_result.responseTime);
        }

        this.lineChartLabels = this.timestamps;
      });
  }

  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Response Time',
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
          fontColor: "#F8F8DD"
        }
      }],
    }
  };

  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(54,59,51,0.5)',
      borderColor: 'rgba(178,234,148,1)',
      pointBackgroundColor: 'rgba(217,95,14,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartData: Array<any> = [
    { data: this.domElements, label: 'Equella' }
  ];

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  ngOnInit() {
    this.getTestResults();
  }

}
