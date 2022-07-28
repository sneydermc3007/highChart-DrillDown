import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DataGraficaService } from './services/data-grafica.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule
  ],
  providers: [DataGraficaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
