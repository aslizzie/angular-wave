import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '@core/models/movies';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {
  @Input() title: string = ''
  @Input() dataMovies: Array<MovieModel> = []
  constructor() { }

  ngOnInit(): void {
  }

}
