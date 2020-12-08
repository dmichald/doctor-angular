import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ReservationsComponent} from './office-management/reservations/reservations.component';
import {AuthGuard} from './utils/auth.guard';
import {SelectivePreloadingStrategyService} from './utils/selecting-strategy';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ManageAccountComponent} from './office-management/manage-account/manage-account.component';
import {ManageOfficeComponent} from './office-management/manage-office/manage-office.component';

const appRoutes = [
  { path: '',   redirectTo: '/offices', pathMatch: 'full' },
  { path: 'login',   component: LoginComponent },
  { path: 'register',   component: RegisterComponent },
  {
    path: 'manage',
    canActive: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () => import('./office-management/office-management.module').then(m => m.OfficeManagementModule),

  },


  // {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true, preloadingStrategy: SelectivePreloadingStrategyService,}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
