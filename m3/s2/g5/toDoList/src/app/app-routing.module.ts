import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompletedComponent } from './components/completed/completed.component';
import { UncompletedComponent } from './components/uncompleted/uncompleted.component';
import { UsersComponent } from './components/users/users.component';
import { AsideComponent } from './main-components/aside/aside.component';

const routes: Routes = [
  {path:'home',
  component:HomeComponent,
  title:'Home'
},
{
  path:'completed',
  component: CompletedComponent,
  title: 'Completed'
},
{
  path:'uncompleted',
  component: UncompletedComponent,
  title: 'Uncompleted'
},
{
  path:'users',
  component: UsersComponent,
  title: 'Users'
},
{
  path:'aside',
  component: AsideComponent,
},
{
  path: '**',
  redirectTo: 'home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
