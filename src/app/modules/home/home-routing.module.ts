import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'movies',
    loadChildren:() => import('@modules/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'movies/:id',
    loadChildren:() => import('@modules/movie/movie.module').then(m => m.MovieModule)
  },
  {
    path: 'series',
    loadChildren:() => import('@modules/series/series.module').then(m => m.SeriesModule)
  },
  {
    path: 'series/:id',
    loadChildren:() => import('@modules/serie/serie.module').then(m => m.SerieModule)
  },
  {
    path: 'favorites',
    loadChildren:() => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: '**',
    redirectTo: '/movies'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
