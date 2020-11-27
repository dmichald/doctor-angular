import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  workHours = () => {
    const array: string[] = [];
    for (let i = 7; i < 21; i++) {
      array.push(`${i}:00`);
    }
    return array;
  }

  visitDuration = () => {
    const array: string[] = [];
    for (let i = 1; i < 6; i++) {
      array.push(`${i}0`);
    }
    return array;
  }

}
