import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { RestService } from '../shared/rest.service';

import * as Highcharts from 'highcharts/highstock';
import { ActivatedRoute } from '@angular/router';
import { log } from 'util';

declare var $: any;


@Component({
  selector: 'app-compare-view',
  templateUrl: './compare-view.component.html',
  styleUrls: ['./compare-view.component.css']
})
export class CompareViewComponent implements OnInit, AfterViewChecked {

  constructor(private restService:RestService, private activatedRoute: ActivatedRoute) { }

  Highcharts = Highcharts;
  dataChartsOptions = [];
  chartConstructor = 'stockChart';
  specialChartOption;

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.getData(params['vehicles']);
   });
  }

  getData(vehicles){
    this.restService.getComponentDetails(vehicles).subscribe(response => {
      this.fillSpecialChartOption(response);
      response.forEach(vehicleElement => {
        let chartOptions =  {
          opened: false,
          name: vehicleElement.vehicle,
          legend: {
            enabled: true,
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
          },
          series:null
        };
        let series = [];

        vehicleElement.series.forEach(element => {        
          let key = Object.keys(element)[0];        
          let singleDataProperty = {
            data: element[key],
            name: key
          }
          series.push(singleDataProperty);
        });
        chartOptions.series = series
        this.dataChartsOptions.push(chartOptions);
      });
    })
  }

  fillSpecialChartOption(data){
    let series = [];
    data.forEach(element_main => {
      element_main.series.forEach(element => {        
        let key = Object.keys(element)[0];        
        let singleDataProperty = {
          data: element[key],
          name: element_main.vehicle + "-" + key
        }
        series.push(singleDataProperty);
      });
    });
    this.specialChartOption ={
      opened: false,
      name: "Sum Chart",
      legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      series:series
    };
    console.log(this.specialChartOption);
    
  }

  ngAfterViewChecked(){    
    $('.highcharts-input-group').hide()
  }

}
