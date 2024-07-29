import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SerieRoutingModule } from './serie-routing.module';
import { SerieDetailComponent } from './pages/serie-detail/serie-detail.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    SerieDetailComponent
  ],
  imports: [
    CommonModule,
    SerieRoutingModule,
    SharedModule
  ]
})
export class SerieModule { }
