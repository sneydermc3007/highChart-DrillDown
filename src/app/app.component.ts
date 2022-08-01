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

  // drillDownData = {
  //     series: [
  //       {
  //         type: 'column',
  //         id: 'one',
  //         data: [{
  //           name: 'Enero',
  //           y: 4,
  //           drilldown: 'january_1'
  //         }, {
  //           name: 'Febrero',
  //           y: 2,
  //           drilldown: 'february_1'
  //         }, {
  //           name: 'Marzo',
  //           y: 1,
  //           drilldown: 'march_1'
  //         }, {
  //           name: 'Abril',
  //           y: 2,
  //           drilldown: 'april_1'
  //         }, {
  //           name: 'Junio',
  //           y: 1,
  //           drilldown: 'june_1'
  //         }]
  //       }, {
  //         type: 'column',
  //         id: 'two',
  //         data: [{
  //           name: 'Enero',
  //           y: 4,
  //           drilldown: 'january_2'
  //         }, {
  //           name: 'Marzo',
  //           y: 2,
  //           drilldown: 'march_2'
  //         }],
  //       }, {
  //         type: 'column',
  //         id: 'three',
  //         data: [{
  //           name: 'Octubre',
  //           y: 1,
  //           drilldown: 'october_3'
  //         }]
  //       },
  //   ]

  // } as Highcharts.DrilldownOptions;

  loading: boolean = true
  Highcharts: typeof Highcharts = Highcharts;

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
          //console.log(this.drillDownData)
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
    //drilldown: this.drillDownData
    //drilldown: this.drill_prueba as Highcharts.DrilldownOptions
    drilldown: {
      series: this._dataService.getDataDrillDown()
    }
  }

}
