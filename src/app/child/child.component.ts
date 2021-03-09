import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() msg: String = 'abc';
  @Output() message = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  updateMsg(e) {
    this.message.emit(e.target.value);
  }
}
