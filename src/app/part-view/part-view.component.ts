import { Component, OnInit } from '@angular/core';
import { RestService } from '../shared/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-part-view',
  templateUrl: './part-view.component.html',
  styleUrls: ['./part-view.component.css']
})
export class PartViewComponent implements OnInit {

  constructor(private restService:RestService, private router:Router) { }
  
  public vehicles;

  ngOnInit() {
    this.restService.getPartViewData().subscribe(response => {

      this.vehicles = response;
      this.vehicles.sort((a,b) => (a.Critical > b.Critical) ?((b.Critical > a.Critical) ? -1 : 0): 1);
      this.vehicles.forEach(element => {
        element.compare = false;
      });      
      console.log(this.vehicles);

    });
  }

  compare(){
    let compareList = "";

    this.vehicles.forEach(element => {
      if(element.compare){
        compareList = compareList + ',' +  element.VIN
      }
    });
    this.router.navigate(['/compareView'], { queryParams: { vehicles: compareList } });

  }

/** JS for dropdown. this will not work!!!!
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });

  // Or with jQuery

  $('.dropdown-trigger').dropdown();
  **/


}
