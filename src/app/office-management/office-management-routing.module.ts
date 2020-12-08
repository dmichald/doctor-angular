import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReservationsComponent} from './reservations/reservations.component';

const officeRoutes: Routes = [
  {path: 'res', component: ReservationsComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(officeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OfficeManagementRoutingModule {
}
