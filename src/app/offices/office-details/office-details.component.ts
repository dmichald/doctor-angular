import {Component, OnInit} from '@angular/core';
import {OfficeDetails} from '../../common/OfficeDetails';
import {OfficeService} from '../../services/office.service';

@Component({
  selector: 'app-office-details',
  templateUrl: './office-details.component.html',
  styleUrls: ['./office-details.component.css']
})
export class OfficeDetailsComponent implements OnInit {
  officeDetails: OfficeDetails;


  constructor(private officeService: OfficeService) {
  }

  ngOnInit(): void {
    this.getOfficeDetails(1);
  }

  // tslint:disable-next-line:typedef
  getOfficeDetails(officeId: number) {
    this.officeService.getOfficeDetails(officeId).subscribe(
      value => this.officeDetails = value
    );
  }

}
