import { Component, OnInit } from '@angular/core';
import { RestService } from '../shared/rest.service';


@Component({
  selector: 'app-select-view',
  templateUrl: './select-view.component.html',
  styleUrls: ['./select-view.component.css']
})
export class SelectViewComponent implements OnInit {
  data;
  constructor(private restService:RestService) { }

  ngOnInit() {
    this.data;
    this.restService.getSelectViewData().subscribe(response => {
      this.data = response
      console.log(this.data)
    })
  }

}
