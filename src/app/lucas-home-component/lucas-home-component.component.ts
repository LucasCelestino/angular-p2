import { Component, OnInit } from '@angular/core';
import { LucasTasksServiceService } from '../lucas-tasks-service.service';

@Component({
  selector: 'app-lucas-home-component',
  templateUrl: './lucas-home-component.component.html',
  styleUrls: ['./lucas-home-component.component.css'],
})
export class LucasHomeComponentComponent implements OnInit {
  countTarefas;

  constructor(private myTasks: LucasTasksServiceService) {}

  ngOnInit() {
    this.countTarefas = this.myTasks.countTarefas();
  }
}
