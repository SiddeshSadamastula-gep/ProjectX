import { Component, OnInit } from '@angular/core';
import tasks from '../data/tasks';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}
  tasks = tasks;
  ngOnInit(): void {
  }

  setStatus(e) {
    this.tasks.filter((task) =>
      task.id == e.id && e.status == 'in progress'
        ? (task.status = 'in progress')
        : task.id == e.id && e.status == 'complete'
        ? (task.status = 'complete')
        : task.id == e.id
    );
  }
}
