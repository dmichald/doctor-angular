import {Component, OnInit} from '@angular/core';
import {OfficeService} from '../../services/office.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private officeService: OfficeService, private formBuilder: FormBuilder) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear, currentMonth + 12, 31);
  }

  hours: string[];
  selectedDate: Date;
  minDate: Date;
  maxDate: Date;
  selectedChip: string;
  checkoutFormGroup: FormGroup;


  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  ngOnInit(): void {
    this.checkoutFormGroup = new FormGroup({
      date: new FormControl('', [Validators.required]),
      startTime: new FormControl(['', Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telephoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9\\-\\+]{9,15}$')])
    });
  }

  // tslint:disable-next-line:typedef
  get name() {
    return this.checkoutFormGroup.get('name');
  }

  get startTime() {
    return this.checkoutFormGroup.get('startTime');
  }

  get date() {
    return this.checkoutFormGroup.get('date');
  }

  get surname() {
    return this.checkoutFormGroup.get('surname');
  }

  get email() {
    return this.checkoutFormGroup.get('email');
  }

  get telephoneNumber() {
    return this.checkoutFormGroup.get('telephoneNumber');
  }

  // tslint:disable-next-line:typedef
  getAvailableHours(officeId: number, date: string) {
    this.officeService.getAvailableHours(officeId, date).subscribe(
      value => {
        console.log('HHHH' + value.hours);
        this.hours = value.hours;
      }
    );
  }


  onDateChanged(): void {
    console.log(this.selectedDate);
    const formatDate = `${this.selectedDate.getFullYear()}-${this.selectedDate.getMonth() + 1}-${this.selectedDate.getDate()}`;
    console.log("DATE: " + formatDate)

    this.getAvailableHours(1, formatDate);
    console.log('hours' + this.hours);
  }

  // tslint:disable-next-line:typedef
  onChipClicked() {
    console.log(this.selectedChip);
  }

  onSubmit() {

  }
}
