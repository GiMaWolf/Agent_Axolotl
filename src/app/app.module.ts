import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SelectViewComponent } from './select-view/select-view.component';
import { PartViewComponent } from './part-view/part-view.component';
import { MainViewComponent } from './main-view/main-view.component';
import { AppRoutingModule } from './app-routing.module';
import { CompareViewComponent } from './compare-view/compare-view.component';
import { RestService } from './shared/rest.service';
import { FormsModule } from '@angular/forms'; 

import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    SelectViewComponent,
    MainViewComponent,
    CompareViewComponent,
    PartViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HighchartsChartModule,
    FormsModule
  ],
  providers: [RestService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
