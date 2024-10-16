import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from './auth/guest.guard';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { PriceComponent } from './main-components/price/price.component';

const routes: Routes = [
  { path: '', 
    component: HomeComponent
   }, 
  { path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  canActivate: [GuestGuard],
  canActivateChild: [GuestGuard],
},
{
  path: 'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  canActivate: [AuthGuard]
},
{
  path: 'price',
  component: PriceComponent
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
