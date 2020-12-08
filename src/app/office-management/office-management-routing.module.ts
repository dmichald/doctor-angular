import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReservationsComponent} from './reservations/reservations.component';
import {ManageOfficeComponent} from './manage-office/manage-office.component';
import {AuthGuard} from '../utils/auth.guard';
import {ReservationsListComponent} from './reservations-list/reservations-list.component';
import {ManageAccountComponent} from './manage-account/manage-account.component';

const routes: Routes = [
  {
    path: '',
    component: ReservationsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'manage',
        children: [
          { path: 'reservations', component: ReservationsListComponent },
          { path: 'office', component: ManageOfficeComponent },
          { path: 'account', component: ManageAccountComponent },
          { path: '', component: ReservationsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OfficeManagementRoutingModule {
}
