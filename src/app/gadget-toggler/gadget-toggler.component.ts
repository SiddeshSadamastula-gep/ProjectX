import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gadget-toggler',
  templateUrl: './gadget-toggler.component.html',
  styleUrls: ['./gadget-toggler.component.css'],
})
export class GadgetTogglerComponent implements OnInit {
  mobileDesc: boolean;
  heaphoneDesc: boolean;

  constructor() {}

  ngOnInit(): void {
    this.mobileDesc = false;
    this.heaphoneDesc = false;
  }

  viewImage() {
     this.mobileDesc = true;
     this.heaphoneDesc = true;
  }
}
