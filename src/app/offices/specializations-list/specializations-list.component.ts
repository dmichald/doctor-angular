import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SpecializationService} from '../../services/specialization.service';
import {Specialization} from '../../common/specialization';


@Component({
  selector: 'app-specializations-list',
  templateUrl: './specializations-list.component.html',
  styleUrls: ['./specializations-list.component.css']
})
export class SpecializationsListComponent implements OnInit {
  specializations: Specialization[];
  selected: number;
  @Output() changed = new EventEmitter<number>();
  constructor(private specializationService: SpecializationService) {
  }

  ngOnInit(): void {
    this.getSpecializations();
  }

  getSpecializations(): void {
    this.specializationService.getSpecializations().subscribe((
      value => {
        this.specializations = value.specializations;
      }
    ));
  }

  // tslint:disable-next-line:typedef
  onSelectEmit() {
    this.changed.emit(this.selected);
  }
}
