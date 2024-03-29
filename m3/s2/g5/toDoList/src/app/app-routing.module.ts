import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompletedComponent } from './components/completed/completed.component';
import { UncompletedComponent } from './components/uncompleted/uncompleted.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'',
component:HomeComponent
},
{
  path:'completed',
  component: CompletedComponent
},
{
  path:'uncompleted',
  component: UncompletedComponent
},
{
  path:'users',
  component: UsersComponent
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
