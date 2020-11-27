import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Specialization} from '../common/specialization';
import {SpecializationService} from '../services/specialization.service';
import {MustMatch} from '../utils/mus-match-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  specializations: Specialization[];
  form: FormGroup;
  userForm:FormGroup;
  spec: Specialization[];

  constructor(private specializationService: SpecializationService, private fb: FormBuilder) {
  }

  ngOnInit(): void {


    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      matchingPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'matchingPassword')
    });


    this.form = this.fb.group({

      doctor: this.fb.group({
        name: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        specializations: [this.spec, [Validators.required]]
      }),

      contact: this.fb.group({
        telephoneNumber: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]]
      }),

      address: this.fb.group({
        street: ['', [Validators.required]],
        code: ['', [Validators.required]],
        city: ['', [Validators.required]]
      }),

      startWorkAt: ['', [Validators.required]],
      finishWorkAt: ['', [Validators.required]],
      oneVisitDuration: ['', [Validators.required]]
    });


    this.specializationService.getSpecializations().subscribe((
      value => {
        this.specializations = value.specializations;
      }
    ));
  }

  get username() {return this.userForm.get('username') as FormControl;}
  get password() {return this.userForm.get('password') as FormControl;}
  get matchingPassword() {return this.userForm.get('matchingPassword') as FormControl;}

  get docSpec() {return this.form.get('doctor').get('specializations') as FormControl;}
  get docName() {return this.form.get('doctor').get('name') as FormControl;}
  get docSur() {return this.form.get('doctor').get('surname') as FormControl;}

  get contactTel() {return this.form.get('contact').get('telephoneNumber') as FormControl;}
  get contactEmail() {return this.form.get('contact').get('email') as FormControl;}

  get addressStreet() {return this.form.get('address').get('street') as FormControl;}
  get addressCode() {return this.form.get('address').get('code') as FormControl;}
  get addressCity() {return this.form.get('address').get('city') as FormControl;}

  get startWork() {return this.form.get('startWorkAt') as FormControl;}
  get endWork() {return this.form.get('finishWorkAt')as FormControl;}
  get visitDuration () {return this.form.get('oneVisitDuration') as FormControl;}






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



}
