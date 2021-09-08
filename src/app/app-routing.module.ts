import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },

  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }