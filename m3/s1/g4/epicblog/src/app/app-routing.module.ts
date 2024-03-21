import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostComponent } from './component/active-post/active-post.component';
import { HomeComponent } from './component/home/home.component';
import { InactivePostComponent } from './component/inactive-post/inactive-post.component';
import { PostDetailsComponent } from './component/post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'active-post',
    component: ActivePostComponent
  },
  {
    path: 'inactive-post',
    component: InactivePostComponent
  },
  {
    path: 'post-details',
    component: PostDetailsComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
