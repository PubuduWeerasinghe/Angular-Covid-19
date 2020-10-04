import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { CountryReorts } from 'src/countryReports';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { DailyReports } from 'src/dailyReport';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  Chart_data:CountryReorts[];

  dataa:DailyReports[];

  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [];
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartColor:any=[
    {
      backgroundColor: [
        '#f2711c',
        '#36a2eb',
        '#21ba45',
        '#db2828',
        'rgba(153, 102, 255, 1)',
        
    ],
   borderWidth: 2
 }
  ];

  constructor(private service:CovidService) { }

  pieChart(){
    let labels=[];
    this.doughnutChartLabels=labels;

    let chartData=[];
    this.doughnutChartData=chartData;

    let resp = this.service.covid19Reports();
    resp.subscribe((data)=>{
      this.Chart_data=data; 
      data.forEach(cs=>{
         if(cs.cases>1000000)
        labels.push([
          cs.country
        ]),
        chartData.push([
          cs.cases
        ])
      })
         console.log(chartData);
   })
  }

  ngOnInit(): void {
    this.pieChart();
  }

}
