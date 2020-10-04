import { Component, OnInit, ViewChild } from '@angular/core';
import { CovidService } from '../covid.service';
import { CountryReorts } from 'src/countryReports';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { DailyReports } from 'src/dailyReport';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})


export class AllComponent implements OnInit {

  ELEMENT_DATA:CountryReorts[];

  displayedColumns: string[] = ['country', 'cases','todayCases','deaths','todayDeaths','recovered','active'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSource = new MatTableDataSource<CountryReorts>(this.ELEMENT_DATA);
 
  constructor(private service:CovidService) { }

  ngOnInit(): void {
    this.getallUsers();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
    this.service.covid19Reports().subscribe((data)=>{
     this.ELEMENT_DATA=data;
       console.log(data); 
    })
  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getallUsers(){

    let res = this.service.covid19Reports();
    res.subscribe(report=>this.dataSource.data=report as CountryReorts[])
  }

}
