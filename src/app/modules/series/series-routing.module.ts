import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesPageComponent } from './pages/series-page/series-page.component';

const routes: Routes = [
  {
    path: '',
    component: SeriesPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
