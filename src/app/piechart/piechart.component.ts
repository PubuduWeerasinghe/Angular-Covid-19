import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { CountryReorts } from 'src/countryReports';



@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})

export class PiechartComponent implements OnInit {

  ELEMENT_DATA:CountryReorts[];
  
  public pieChartLabels:string[];
  public pieChartData:string[];
  public pieChartType;
  public Colorr:string[];

  constructor(private service:CovidService) { }


  initchart(){
    let pieChartLabels =[];
    let datatable =[];
    let datatable2 =[]; 

    this.pieChartLabels = datatable;
    this.pieChartData = datatable2;
    this.pieChartType = 'doughnut';
    
      let resp = this.service.covid19Reports();
      resp.subscribe((data)=>{
        this.ELEMENT_DATA=data; 
        data.forEach(cs=>{
           if(cs.cases>100000)
          datatable.push([
            cs.country
          ]),
          datatable2.push([
            cs.cases
          ])
        })
           console.log(datatable);
     })
  }

  pieChartColor:any = [
    {
         backgroundColor: []
      ,
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]

  colorChart(){
    this.pieChartColor ={
      backgroundColor:['rgba(30, 169, 224, 0.8)','rgba(255,165,0,0.9)','rgba(139, 136, 136, 0.9)','rgba(255, 161, 181, 0.9)','rgba(255, 102, 0, 0.9)']
    }

    let color=['rgba(30, 169, 224, 0.8)','rgba(255,165,0,0.9)','rgba(139, 136, 136, 0.9)','rgba(255, 161, 181, 0.9)','rgba(255, 102, 0, 0.9)'];
  
    console.log();

   }

  ngOnInit(): void {
    this.initchart();
    
    // this.colorChart();
  }

  pieChartOptions = {
    responsive: true,
}


  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }



}
