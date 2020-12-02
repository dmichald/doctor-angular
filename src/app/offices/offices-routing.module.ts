import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OfficesListComponent} from './offices-list/offices-list.component';
import {OfficeDetailsComponent} from './office-details/office-details.component';

const officeRoutes: Routes = [
  { path: 'offices',  component: OfficesListComponent },
  { path: 'offices/:id', component: OfficeDetailsComponent }
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
export class OfficesRoutingModule { }
