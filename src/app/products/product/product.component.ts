import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() task;
  @Output() setStatus = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  setStatuss(status, id) {
    this.setStatus.emit({ status: status, id: id });
  }
}
