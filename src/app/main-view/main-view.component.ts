import { Component, OnInit } from '@angular/core';
import { RestService } from '../shared/rest.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  data;
  constructor(private restService:RestService) { }

  ngOnInit() {
    this.data;
    this.restService.getMainViewData().subscribe(response => {
      this.data = response
      console.log(this.data)
    })
  }

}
