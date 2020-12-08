import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Specialization} from '../../common/specialization';


@Component({
  selector: 'app-manage-office',
  templateUrl: './manage-office.component.html',
  styleUrls: ['./manage-office.component.css']
})
export class ManageOfficeComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  constructor() { }

  ngOnInit(): void {
  }
  workHours = () => {
    const array: string[] = [];
    for (let i = 7; i < 21; i++) {
      array.push(`${i}:00`);
    }
    return array;
  };

  visitDurations = () => {
    const array: string[] = [];
    for (let i = 1; i < 6; i++) {
      array.push(`${i}0`);
    }
    return array;
  };
  specializations = ["A","B","C"];

  doctorSpecializations: Specialization[] = [
    {id: 1, name:'Spec'},{id: 2, name:'Spec2'},{id: 3, name:'Spec3'},{id: 4, name:'Spec4'}
  ]

  allSpec: Specialization[] = [
    {id: 33, name:'Zwierzęta domowe'},{id: 43, name:'Chirurgia'},{id: 234, name:'sdfasdf'},{id: 42, name:'ghjfghf'}
  ]

  onSpecRemoved(spec: Specialization) {
    console.log(`clicked ${spec.id}  ${spec.name}`);
    this.removeFirst(this.doctorSpecializations,spec);
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  addSpec(spec: Specialization) {
    console.log(`ADD ${spec.name}`);
    this.doctorSpecializations.push(spec);
  }
}
