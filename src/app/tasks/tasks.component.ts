import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {DUMMY_TASKS} from "../dummy-users";
import {NewTaskComponent} from "./new-task/new-task.component";
import {NgIf} from "@angular/common";
import {NewTask} from "../interfaces/new-task.interface";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent,
    NgIf
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = DUMMY_TASKS;
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  newTask = false;

  get selectedUseTask() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    debugger
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddTask() {
    this.newTask = true;
  }

  onAddNewTask(taskDAta: NewTask) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskDAta.title,
      summary: taskDAta.summary,
      dueDate: taskDAta.date,
    });
    this.newTask = false;
  }

  onCancel() {
    this.newTask = false;
  }
}
