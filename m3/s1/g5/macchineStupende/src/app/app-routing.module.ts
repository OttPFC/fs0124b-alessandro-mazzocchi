import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AudiComponent } from './components/audi/audi.component';
import { FordComponent } from './components/ford/ford.component';
import { FiatComponent } from './components/fiat/fiat.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '',
component: HomeComponent
},
{ path: 'audi',
component: AudiComponent
},
{ path: 'ford',
  component: FordComponent 
},
{ path: 'fiat',
  component: FiatComponent 
},
{
path: 'details/:model',
component: DetailsComponent
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
