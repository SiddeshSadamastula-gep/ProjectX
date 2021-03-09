import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  number: number;
  range: number;
  result: any;
  constructor() {}

  ngOnInit(): void {
    this.number = 1;
    this.range = 4;
    this.result = [];
    this.generateTable();
  }
  generateTable() {
    this.result = [];
    for (let i = 1; i <= this.range; i++) {
      this.result.push(this.number * i);
    }
  }
}
