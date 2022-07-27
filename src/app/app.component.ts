import { Component } from '@angular/core';

import * as Highcharts from 'highcharts';

import Drilldown  from "highcharts/modules/drilldown";
  Drilldown(Highcharts)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mesaAyuda';

  Highcharts: typeof Highcharts = Highcharts;

  drillDownData = {
      series: [
        {
          type: 'column',
          id: 'one',
          data: [{
            name: 'Enero',
            y: 4,
            drilldown: 'january_1'
          }, {
            name: 'Febrero',
            y: 2,
            drilldown: 'february_1'
          }, {
            name: 'Marzo',
            y: 1,
            drilldown: 'march_1'
          }, {
            name: 'Abril',
            y: 2,
            drilldown: 'april_1'
          }, {
            name: 'Junio',
            y: 1,
            drilldown: 'june_1'
          }]
        }, {
          type: 'column',
          id: 'two',
          data: [{
            name: 'Enero',
            y: 4,
            drilldown: 'january_2'
          }, {
            name: 'Marzo',
            y: 2,
            drilldown: 'march_2'
          }],
        }, {
          type: 'column',
          id: 'three',
          data: [{
            name: 'Octubre',
            y: 1,
            drilldown: 'october_3'
          }]
        },

      //SubNivel 2
      {
        type: 'pie',
        id: 'january_1',
        data: [
          ['S1', 2],
          ['S2', 1],
          ['S3', 6],
          ['S4', 4]
        ]
      }, {
        type: 'pie',
        id: 'february_1',
        data: [
          ['S2', 1],
          ['S3', 5]
        ]
      }, {
        type: 'pie',
        id: 'march_1',
        data: [
          ['S4', 7]
        ]
      }, {
        type: 'pie',
        id: 'april_1',
        data: [
          ['S1', 3],
          ['S3', 2]
        ]
      }, {
        type: 'pie',
        id: 'june_1',
        data: [
          ['S2', 5]
        ]
      }, {
        type: 'pie',
        id: 'january_2',
        data: [
          ['S1', 5],
          ['S2', 7],
          ['S3', 2],
          ['S4', 4]
        ]
      }, {
        type: 'pie',
        id: 'march_2',
        data: [
          ['S3', 5],
          ['S4', 7]
        ],
      }, {
        type: 'pie',
        id: 'october_3',
        data: [
          [
            ['S2', 6]
          ]
        ]
      }
    ]

  } as Highcharts.DrilldownOptions;

  chartOptions: Highcharts.Options = {
    chart: {
      events: {
        drilldown: () => {
          console.log(this.drillDownData)
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
      data: [{
        name: 'Sensor 1',
        y: 5,
        drilldown: 'one'
      }, {
        name: 'Sensor 2',
        y: 2,
        drilldown: 'two'
      }, {
        name: 'Sensor 3',
        y: 1,
        drilldown: 'three'
      }]
    }],
    drilldown: this.drillDownData

  }

}
