import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesPageComponent } from './pages/series-page/series-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    SeriesPageComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    SharedModule
  ]
})
export class SeriesModule { }
