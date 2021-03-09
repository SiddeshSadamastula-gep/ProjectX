import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-validator',
  templateUrl: './age-validator.component.html',
  styleUrls: ['./age-validator.component.css'],
})
export class AgeValidatorComponent implements OnInit {
  constructor() {}
  msg: string;
  msgColor: String;
  ngOnInit(): void {
    this.msg = 'Enter your age';
    this.msgColor = 'black';
  }

  updateAge(e) {
    this.msg = e.target.value >= 18 ? 'Valid Age' : 'Invalid Age';
    this.msgColor = e.target.value >= 18 ? 'green' : 'red';
    if (e.target.value.length == 0) {
      this.ngOnInit();
    }
  }
}
