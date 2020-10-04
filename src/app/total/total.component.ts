import { Component, OnInit } from '@angular/core';
import { TotalReports } from 'src/totalReport';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {


  Total:TotalReports[];
  TotalDeaths:TotalReports[];
  TotalCases:TotalReports[];
  TotalRecovered:TotalReports[];
  TotalActive:TotalReports[];

  constructor(private service:CovidService) { }

  ngOnInit(): void {
     
    let resp = this.service.totalReport();
    resp.subscribe((data)=>{

      this.Total=data;
      this.TotalCases=data['cases'];
      this.TotalDeaths=data['deaths'];
      this.TotalActive=data['active'];
      this.TotalRecovered=data['recovered'];
      
      let a=this.Total;
      console.log(this.TotalDeaths);

      
    })
    
  }

}
