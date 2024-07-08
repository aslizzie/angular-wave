import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesPageComponent } from './pages/series-page/series-page.component';


@NgModule({
  declarations: [
    SeriesPageComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule
  ]
})
export class SeriesModule { }
