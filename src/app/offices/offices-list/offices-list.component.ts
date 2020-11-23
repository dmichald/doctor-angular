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
  searchText: string;
  offices: Office[];

  // parameters
  specializationId: number;
  doctorName: string;
  city: string;

  constructor(private cityService: CityService, private officeService: OfficeService) {
  }

  ngOnInit(): void {
    this.getCities();
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
      }
    ));
  }

  // tslint:disable-next-line:typedef
  onInputChange(event: any) {
    if (this.doctorName.length > 3) {
      this.getOffices();
    }
  }

}
