import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/series.json';
import { SerieModel } from '@core/models/series';

@Component({
  selector: 'app-series-page',
  templateUrl: './series-page.component.html',
  styleUrls: ['./series-page.component.css']
})
export class SeriesPageComponent implements OnInit {
  mockSeriesList:Array<SerieModel> = []
  constructor() { }

  ngOnInit(): void {
    const {data}:any = (dataRaw as any).default
    this.mockSeriesList = data;
  }
}
