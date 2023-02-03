import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DataGraficaService } from './services/data-grafica.service';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { BuilderModule } from '@builder.io/angular'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    BuilderModule.forRoot('5148c5ddaa674eabb2063f9d9ad6d1f2'),
    RouterModule.forRoot([
      { path: '**', component: LandingPageComponent }
    ])
  ],
  providers: [DataGraficaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
