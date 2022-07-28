import { Injectable } from '@angular/core';


export interface Data {
  fecha: Date;
  sensor: string;
  cantidadDatos: number;
  valor: number
}

@Injectable({
  providedIn: 'root'
})
export class DataGraficaService {

  constructor() { }

  prueba(){
    console.info('Prueba llamada al servicio')
  }

  dataGrafica: any
  getData(): Array<number>{

    this.dataGrafica = [
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
    return this.dataGrafica
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
