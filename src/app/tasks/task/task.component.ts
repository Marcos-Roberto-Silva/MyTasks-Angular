import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CardComponent} from "../../shared/card/card.component";
import {DatePipe} from "@angular/common";
import {TasksService} from "../tasks.service";

interface Task {
  id: string;
  title: string
  summary: string
  userId: string
  dueDate: string
}
@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, DatePipe],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  constructor(private tasksService: TasksService) {
  }

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
