import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OfficesListComponent} from './offices-list/offices-list.component';
import {OfficeDetailsComponent} from './office-details/office-details.component';
import {SpecializationsListComponent} from './specializations-list/specializations-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CheckoutComponent } from './checkout/checkout.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {OfficesRoutingModule} from './offices-routing.module';


@NgModule({
  declarations: [OfficesListComponent, OfficeDetailsComponent, SpecializationsListComponent, CheckoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    OfficesRoutingModule
  ],
  exports: [
    OfficeDetailsComponent,
    SpecializationsListComponent,
    OfficesListComponent,
    CheckoutComponent
  ]
})
export class OfficesModule {
}
