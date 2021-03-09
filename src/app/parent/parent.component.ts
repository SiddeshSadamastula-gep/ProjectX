import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  message: String;
  msg: String;
  constructor() {}

  ngOnInit(): void {
    this.msg = 'Start Here';
  }
  updatemessage(e) {
    console.log(e);
    this.message = e;
  }
}
