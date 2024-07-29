import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '@core/models/movies';
import { SerieModel } from '@core/models/series';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item: any = {
  };
  constructor() { }

  ngOnInit(): void {
  }

}
