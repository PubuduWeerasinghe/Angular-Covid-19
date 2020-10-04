import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { DailyReports } from 'src/dailyReport';

@Component({
  selector: 'app-day-wise',
  templateUrl: './day-wise.component.html',
  styleUrls: ['./day-wise.component.css']
})
export class DayWiseComponent implements OnInit {

  dailyData:DailyReports[];

  constructor(private service:CovidService) { }

  ngOnInit(): void {
    
    this.service.dailyReport().subscribe((data)=>{
      this.dailyData=data;
        console.log(data); 
     })

  }

}
