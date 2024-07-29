import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerieDetailComponent } from './pages/serie-detail/serie-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SerieDetailComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SerieRoutingModule { }
