import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {
  selected = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
