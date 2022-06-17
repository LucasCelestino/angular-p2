import { Injectable } from '@angular/core';

@Injectable()
export class LucasTasksServiceService {
  myTaks = localStorage;

  constructor() {}

  getAllTasks() {
    var values = [],
      keys = Object.keys(this.myTaks),
      i = keys.length;

    while (i--) {
      values.push(this.myTaks.getItem(keys[i]));
    }

    return values;
  }

  createTask(task: string) {
    this.myTaks.setItem(this.myTaks.length.toString(), task);
  }

  deleteTask(key: number) {
    this.myTaks.removeItem(key.toString());
  }

  countTarefas() {
    return this.myTaks.length;
  }
}
