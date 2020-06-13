import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  parts: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getCharacters().subscribe(data => {
      this.parts = data
      console.log(this.parts);
    }
  );
  }


}