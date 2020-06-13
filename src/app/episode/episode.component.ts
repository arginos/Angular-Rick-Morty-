import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-list',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  parts: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getEpisodes().subscribe(data => {
      this.parts = data
      console.log(this.parts);
    }
  );
  }


}