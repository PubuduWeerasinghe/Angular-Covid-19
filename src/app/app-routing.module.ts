import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { HomeComponent } from './home/home.component';
import { PiechartComponent } from './piechart/piechart.component';
import { ChartComponent } from './chart/chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';


const routes: Routes = [
  // {path : '', component : AllComponent},
  {path : '', component : HomeComponent},
  {path : 'pie', component : PiechartComponent},
  {path : 'chart', component : ChartComponent},
  {path : 'LineChart', component : LineChartComponent},

  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
