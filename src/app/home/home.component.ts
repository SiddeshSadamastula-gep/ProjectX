import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: string = '';
  age: number = 25;
  constructor() {}
  ngOnInit(): void {
    this.name = 'Siddesh';
  }

  increaseAge() {
    // if (this.age < 30) this.age = this.age + 1;
    // else alert('30 is the maximum age');
    this.age < 30 ? this.age++ : alert('30 is the maximum age');
  }
  decreaseAge() {
    // if (this.age > 20) this.age = this.age - 1;
    // else alert('20 is the minimum age');
    this.age > 20 ? this.age-- : alert('20 is the minimum age');
  }
}
