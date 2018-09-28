import { Component, OnInit } from '@angular/core';
import { RestService } from '../shared/rest.service';

import * as Highcharts from 'highcharts/highstock';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-compare-view',
  templateUrl: './compare-view.component.html',
  styleUrls: ['./compare-view.component.css']
})
export class CompareViewComponent implements OnInit {

  constructor(private restService:RestService, private activatedRoute: ActivatedRoute) { }

  Highcharts = Highcharts;
  dataChartsOptions = [];
  chartConstructor = 'stockChart';

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.getData(params['vehicles']);
   });
  }

  getData(vehicles){
    this.restService.getComponentDetails(vehicles).subscribe(response => {
      response.forEach(vehicleElement => {
        let chartOptions =  {
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

}
