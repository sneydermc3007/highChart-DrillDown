import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

import Drilldown  from "highcharts/modules/drilldown";
  Drilldown(Highcharts)

import { DataGraficaService, Data_DrillDown } from './services/data-grafica.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mesaAyuda';
  loading: boolean = true
  Highcharts: typeof Highcharts = Highcharts;

  noBuilderPageForUrl: boolean = false;


  public constructor(private _dataService: DataGraficaService){ }

  ngOnInit(): void {
    this._dataService.prueba()
  }

  // Solo sirve para mostrar el json en consola
  getDataDrill(): Data_DrillDown[] {
    return this._dataService.getDataDrillDown()
  }

  drill_prueba = this.getDataDrill()

  chartOptions: Highcharts.Options = {
    chart: {
      events: {
        drilldown: () => {
          console.log(this.drill_prueba)
        }
      }
    },
    title: {
      text: 'Prueba DrillDown'
    },
    xAxis: {
      type: 'category'
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
            enabled: true
        }
      }
    },
    series: [{
      type: 'column',
      name: 'Sensores',
      colorByPoint: true,
      data: this._dataService.getDataSeries()
    }],
    drilldown: {
      series: this._dataService.getDataDrillDown()
    }
  }

}
