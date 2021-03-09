import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-userdata',
  templateUrl: './search-userdata.component.html',
  styleUrls: ['./search-userdata.component.css'],
})
export class SearchUserdataComponent implements OnInit {
  userData: any;
  input: String;
  constructor() {}

  ngOnInit(): void {
    this.userData = [
      { fname: 'Ankit', mname: 'Kumar', lname: 'Sharma' },
      { fname: 'Rahul', mname: 'Jaswinder', lname: 'Singh' },
      { fname: 'Mayank', mname: 'Narender', lname: 'Thakur' },
      { fname: 'Aman', mname: 'Rakesh', lname: 'Chauhan' },
    ];
  }
}
