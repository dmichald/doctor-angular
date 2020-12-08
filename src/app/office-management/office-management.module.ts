import {NgModule} from '@angular/core';
import {ReservationsComponent} from './reservations/reservations.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {ReservationsListComponent} from './reservations-list/reservations-list.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {RouterModule} from '@angular/router';
import { ManageOfficeComponent } from './manage-office/manage-office.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import { ManageAccountComponent } from './manage-account/manage-account.component';


@NgModule({
  declarations: [ReservationsComponent, ReservationsListComponent, ManageOfficeComponent, ManageAccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    RouterModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
  ],
  exports: [
    ReservationsComponent,
    ReservationsComponent
  ]
})
export class OfficeManagementModule {
}
