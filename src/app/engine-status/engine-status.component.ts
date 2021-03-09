import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engine-status',
  templateUrl: './engine-status.component.html',
  styleUrls: ['./engine-status.component.css'],
})
export class EngineStatusComponent implements OnInit {
  engine: String;
  engineStatus: boolean;
  img: String;
  constructor() {}

  ngOnInit(): void {
    this.engine = 'ENGINE';
    this.engineStatus = true;
    this.img = '/assets/no.jpg';
  }
  changeDataOn() {
    this.img = '/assets/on.jpg';
    this.engine = 'ENGINE ON';
  }
  changeDataOff() {
    this.img = '/assets/off.jpg';
    this.engine = 'ENGINE OFF';
  }
}
