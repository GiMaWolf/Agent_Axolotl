import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-view',
  templateUrl: './part-view.component.html',
  styleUrls: ['./part-view.component.css']
})
export class PartViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
