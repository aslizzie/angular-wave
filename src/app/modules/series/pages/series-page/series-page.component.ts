import { Component, OnInit } from '@angular/core';
import { SerieModel } from '@core/models/series';
import { Subscription } from 'rxjs';
import { SerieService } from '@modules/series/services/serie.service';

@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html',
  styleUrls: ['./series-page.component.css']
})
export class SeriesPageComponent implements OnInit {
  mockSeriesList:Array<any> = []

  listObservers$:Array<Subscription> = []
  
  constructor(private seriesService: SerieService) { }

  ngOnInit(): void {
    this.seriesService.getAllSeries$()
    .subscribe(response => {
      this.mockSeriesList = response;
    })
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }
}
