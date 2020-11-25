import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OfficesListComponent} from './offices-list/offices-list.component';
import {OfficeDetailsComponent} from './office-details/office-details.component';
import {SpecializationsListComponent} from './specializations-list/specializations-list.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [OfficesListComponent, OfficeDetailsComponent, SpecializationsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
  ],
  exports: [
    OfficeDetailsComponent,
    SpecializationsListComponent,
    OfficesListComponent
  ]
})
export class OfficesModule {
}
