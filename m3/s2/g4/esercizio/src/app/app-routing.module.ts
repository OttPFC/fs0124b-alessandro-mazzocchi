import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FavouritesComponent } from './components/favourites/favourites.component';

const routes: Routes = [
  { path: '',
  component: HomeComponent,
  title: 'Home'
  },
  {
    path: 'favourites',
    component: FavouritesComponent,
    title: 'Favourites'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
