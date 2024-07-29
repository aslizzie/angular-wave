import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ]
})
export class MovieModule { }
