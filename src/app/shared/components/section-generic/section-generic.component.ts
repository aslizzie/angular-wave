import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '@core/models/movies';
import { SerieModel } from '@core/models/series';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {
  @Input() title: string = ''
  @Input() dataItems: Array<MovieModel> | Array<SerieModel> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
