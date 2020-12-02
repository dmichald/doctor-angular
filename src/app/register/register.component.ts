import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Specialization} from '../common/specialization';
import {SpecializationService} from '../services/specialization.service';
import {MyErrorStateMatcher} from '../utils/mus-match-validator';
import {OfficeService} from '../services/office.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  hideMatch = true;
  specializations: Specialization[];
  form: FormGroup;
  userForm:FormGroup;
  spec: Specialization[];
  matcher = new MyErrorStateMatcher();

  constructor(private specializationService: SpecializationService, private fb: FormBuilder, private officeService: OfficeService) {
  }

  ngOnInit(): void {


    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
        matchingPassword: ['', [Validators.required]]
      }, {validator: this.checkPasswords}
    );


    this.form = this.fb.group({

      doctor: this.fb.group({
        name: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        specializationsSet: [this.spec, [Validators.required]]
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
      oneVisitDuration: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(1), Validators.max(1000)]]

    });


    this.specializationService.getSpecializations().subscribe((
      value => {
        this.specializations = value.specializations;
      }
    ));
  }

  get f() {
    return this.userForm.controls;
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password').value;
    let confirmPass = group.get('matchingPassword').value;

    return pass === confirmPass ? null : {notSame: true};
  }

  get username() {return this.userForm.get('username') as FormControl;}
  get password() {return this.userForm.get('password') as FormControl;}
  get matchingPassword() {return this.userForm.get('matchingPassword') as FormControl;}

  get docSpec() {
    return this.form.get('doctor').get('specializationsSet') as FormControl;
  }
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

  get price() {
    return this.form.get('price') as FormControl;
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


  onSubmit() {
    let postReq = {
      office: this.form.value,
      owner: this.userForm.value
    };

    console.log(postReq);
    if (this.form.valid && this.userForm.valid) {
      this.officeService.addOffice(postReq)
        .subscribe(value => console.log(value));
    }

  }
}
