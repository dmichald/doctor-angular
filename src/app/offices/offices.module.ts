import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OfficesListComponent} from './offices-list/offices-list.component';
import {OfficeDetailsComponent} from './office-details/office-details.component';
import {SpecializationsListComponent} from './specializations-list/specializations-list.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [OfficesListComponent, OfficeDetailsComponent, SpecializationsListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    OfficeDetailsComponent,
    SpecializationsListComponent,
    OfficesListComponent
  ]
})
export class OfficesModule {
}
