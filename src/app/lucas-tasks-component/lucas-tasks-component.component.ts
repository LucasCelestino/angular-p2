import { Component, OnInit } from '@angular/core';
import { LucasTasksServiceService } from '../lucas-tasks-service.service';

@Component({
  selector: 'app-lucas-tasks-component',
  templateUrl: './lucas-tasks-component.component.html',
  styleUrls: ['./lucas-tasks-component.component.css'],
})
export class LucasTasksComponentComponent implements OnInit {
  myList;
  myTask = '';

  constructor(private myTasks: LucasTasksServiceService) {}

  ngOnInit() {
    this.myList = this.myTasks.getAllTasks();
  }

  createTask() {
    
  }
}
