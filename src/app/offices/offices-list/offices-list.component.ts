import {Component, OnInit} from '@angular/core';
import {CityService} from '../../services/city.service';
import {OfficeService} from '../../services/office.service';
import {Office} from '../../common/office';

@Component({
  selector: 'app-offices-list',
  templateUrl: './offices-list.component.html',
  styleUrls: ['./offices-list.component.css']
})
export class OfficesListComponent implements OnInit {

  cities: string[];
  offices: Office[];
  value = 'Clear me';
  // parameters
  specializationId: number;

  doctorName: string;
  city: string;

  constructor(private cityService: CityService, private officeService: OfficeService) {
  }

  ngOnInit(): void {
    this.getCities();
  }

  onSel(id: number): void {
    this.specializationId = id;
    this.getOffices();
  }


  getCities(): void {
    this.cityService.getCities().subscribe((
      value => {
        this.cities = value.cities;
      }
    ));
  }

  getOffices(): void {
    this.officeService.getOffice(this.doctorName, this.city, this.specializationId).subscribe((
      value => {
        this.offices = value.content;
        console.log(JSON.stringify(value));
      }
    ));
  }

  // tslint:disable-next-line:typedef
  onInputChange(event: any) {
      this.getOffices();
  }


  // tslint:disable-next-line:typedef
  onCitySelect() {
    this.getOffices();
  }

  // tslint:disable-next-line:typedef
  onClearClick() {
    this.doctorName = '';
    this.getOffices();
  }
}
