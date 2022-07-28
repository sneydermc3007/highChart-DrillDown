import { Injectable } from '@angular/core';


export interface Data { // Data que llega desde el api
  fecha: Date;
  sensor: string;
  cantidadDatos: number;
  valor: number
}

interface DataSeries {
  name: string;
  y: number
  drilldown: Data_DrillDown[] | string;
}

export interface Data_DrillDown {
  id?: string | number
  data?: DataSeries[]
}

@Injectable({
  providedIn: 'root'
})
export class DataGraficaService {

  constructor() { }

  prueba(){
    console.info('Prueba llamada al servicio')
  }

  public data: DataSeries[] = [
    {
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
    }
  ]

  public sub_data: Data_DrillDown[] = [ //Falta el type
    {
      id: 'one',
      data: [
        {
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
        }
      ]
    }, {
      id: 'two',
      data: [
        {
          name: 'Enero',
          y: 4,
          drilldown: 'january_2'
        }, {
          name: 'Marzo',
          y: 2,
          drilldown: 'march_2'
        }
      ]
    }, {
      id: 'three',
      data: [
        {
          name: 'Octubre',
          y: 1,
          drilldown: 'october_3'
        }
      ]
    }
  ]

  dataGrafica: any
  drillDown: any

  getDataSeries(): Array<any> {

    this.dataGrafica = this.data
    return this.dataGrafica
  }

  getDataDrillDown(): Array<any> {

    this.drillDown = this.sub_data
    return this.drillDown
  }
}

/* Filtrado de sensores
array = [¨]
arrayT = [¨]

data.foreach((x => {
  if(arraT.indexOf(x.sensor) !== -1)
  array.push({
    "name": x.sensor,
    "y":(x.cantida) * 48,
    drilldown: x.sensor
  })
}))

[
  {"name": x.sensor,
    "y":(x.cantida) * 48,
    drilldown: x.sensor
  }
  {"name": x.sensor,
    "y":(x.cantida) * 48,
    drilldown: x.sensor
  }
  {"name": x.sensor,
    "y":(x.cantida) * 48,
    drilldown: x.sensor
  }
]
*/
