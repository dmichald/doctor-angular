import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ReservationsComponent} from './office-management/reservations/reservations.component';

const appRoutes = [
  { path: '',   redirectTo: '/offices', pathMatch: 'full' },
  { path: 'login',   component: LoginComponent },
  {path: 'man', component: ReservationsComponent},
  { path: 'register',   component: RegisterComponent },
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
