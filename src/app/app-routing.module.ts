import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './utils/auth.guard';
import {SelectivePreloadingStrategyService} from './utils/selecting-strategy';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes = [
  { path: 'login',   component: LoginComponent },
  { path: 'register',   component: RegisterComponent },
  {
    path: 'manage',
    canActive: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () => import('./office-management/office-management.module').then(m => m.OfficeManagementModule)

  },
  { path: '',   redirectTo: '/offices', pathMatch: 'full' },
  { path: '**',   redirectTo: '/offices', pathMatch: 'full'}

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
