import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { GoogleChartInterface } from 'ng2-google-charts';
import { CountryReorts } from 'src/countryReports';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  Chart_Data:CountryReorts[];
  pieChart: GoogleChartInterface = {
    chartType: 'PieChart'
  }

  columnChart: GoogleChartInterface = {
    chartType: 'ColumnChart'
  }

  constructor(private service:CovidService) { }

  initchart(){

    let datatable = [];
      datatable.push(["Country","Cases"])
      let resp = this.service.covid19Reports();
      resp.subscribe((data)=>{
        this.Chart_Data=data; 
        data.forEach(cs=>{
          if(cs.cases>200000)
          datatable.push([
            cs.country,cs.cases
          ])
        })
        // console.log(datatable);
      })

    this.pieChart = {
      chartType: 'PieChart',
      dataTable: datatable,
      //firstRowIsData: true,
      options: {height: 500},
      
    };

    this.columnChart = {
      chartType: 'ColumnChart',
      dataTable: datatable,
      //firstRowIsData: true,
      options: {height: 500},
    };
  }

  

  ngOnInit(): void {
    this.initchart();
  }

}
