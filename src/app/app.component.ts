import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _location: Location) {
  }
  backClicked() {
      this._location.back();
  }
  title = 'Fleet Manager';
}
