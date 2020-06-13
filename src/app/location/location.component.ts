import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-list',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  parts: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getLocations().subscribe(data => {
      this.parts = data
      console.log(this.parts);
    }
  );
  }


}