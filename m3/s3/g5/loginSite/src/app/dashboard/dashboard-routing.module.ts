import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: '', 
  component: DashboardComponent
  },
  {
    path:'home', 
    component: HomeComponent
  },
  {
    path:'movies',
    component: MoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
