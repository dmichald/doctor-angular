import {Component, OnInit} from '@angular/core';
import {SpecializationService} from '../../services/specialization.service';
import {Specialization} from '../../common/specialization';

@Component({
  selector: 'app-specializations-list',
  templateUrl: './specializations-list.component.html',
  styleUrls: ['./specializations-list.component.css']
})
export class SpecializationsListComponent implements OnInit {
  specializations: Specialization[];

  constructor(private specializationService: SpecializationService) {
  }

  ngOnInit(): void {

  }

  getSpecializations(): void {
    this.specializationService.getSpecializations().subscribe((
      value => {
        this.specializations = value.specializations;
      }
    ));
  }

}
