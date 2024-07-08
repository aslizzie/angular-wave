import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren:() => import('@modules/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'series',
    loadChildren:() => import('@modules/series/series.module').then(m => m.SeriesModule)
  },
  {
    path: 'favorites',
    loadChildren:() => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
