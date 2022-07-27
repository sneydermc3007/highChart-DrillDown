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

}
/*
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
