import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TotalReports } from 'src/totalReport';
import { CountryReorts } from 'src/countryReports';
import { DailyReports } from 'src/dailyReport';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) { }

  public covid19Reports(): Observable<CountryReorts[]>{
    return this.http.get<CountryReorts[]>("https://corona.lmao.ninja/v3/covid-19/countries/");
  }

  public totalReport(): Observable<TotalReports[]> {
    return this.http.get<TotalReports[]>("https://corona.lmao.ninja/v3/covid-19/all")
  }

  public dailyReport(): Observable<DailyReports[]> {
    return this.http.get<DailyReports[]>("https://corona.lmao.ninja/v3/covid-19/historical/all")
  }

  
}
