import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-odd',
  templateUrl: './even-odd.component.html',
  styleUrls: ['./even-odd.component.css'],
})
export class EvenOddComponent implements OnInit {
  number: number;
  pn: String;
  i: number;
  m: number;
  flag: number;
  constructor() {}

  ngOnInit(): void {
    this.m = 0;
    this.flag = 0;
  }
  isString() {
    return isNaN(this.number);
  }
  checkEvenOrOdd() {
    return this.number % 2 == 0 ? 'Even Number' : 'Odd Number';
  }
  primeNumber() {
    this.m = this.number / 2;
    if (this.number == 0 || this.number == 1) {
      return this.number + " is not prime number";
    } else {
      for (this.i = 2; this.i <= this.m; this.i++) {
        if (this.number % this.i == 0) {
          return this.number + " is prime number";
          this.flag = 1;
        }
      }
    }
  }
}
