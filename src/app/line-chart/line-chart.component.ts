import { Component, OnInit } from '@angular/core';
import { CountryReorts } from 'src/countryReports';
import { CovidService } from '../covid.service';
import { Chart } from 'chart.js';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  lineChartData: ChartDataSets[] = [];

  lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#3cb371',
      backgroundColor: '#ffffff',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  

  dataa: CountryReorts[];  
  Country = [];  
  Cases = [];  
  Active = [];
  public Linechart : any[];  

  constructor(private service:CovidService) { }

  line(){

    let linelabel=[];
    this.lineChartLabels=linelabel;
 

    let resp = this.service.covid19Reports();

    resp.subscribe((result: CountryReorts[]) => {  

    result.forEach(x => {  
      if(x.cases>100000){
    this.lineChartLabels.push(x.country);  
    this.Cases.push(x.cases);
    this.Active.push(x.active); 
      } 
  });  
  this
  let linedata=[{ data: this.Cases,label:'Cases'},{data:this.Active,label:'Active'}];
  this.lineChartData=linedata;

      });

  }

  ngOnInit(): void {
    this.line();

    let line_chart=[];

    this.Linechart=line_chart;


    let resp = this.service.covid19Reports();

    resp.subscribe((result: CountryReorts[]) => {  

    result.forEach(x => {  
      if(x.cases>100000){
    this.Country.push(x.country);  
    this.Cases.push(x.cases);
    this.Active.push(x.active); 
      } 
  });  
  this
      
      line_chart.push(new Chart('canvas', {  

        type: 'line',  

        data: {  

          labels: this.Country,  

          datasets: [  

            {  

              data: this.Cases, 

              borderColor: '#3cb371',  

              backgroundColor: "#0000FF",  

            }
            ,{  

              data: this.Active, 

              borderColor: 'red',  

              // backgroundColor: "#0000FF",  

            }

          ]

        },  

        options: {  

          legend: {  

            display: false  

          },  

          scales: {  

            xAxes: [{  

              display: true  

            }],  

            yAxes: [{  

              display: true  

            }],  

          }  

        }  

      })); 
      });  

  }

}
