import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CardComponent} from "../../shared/card/card.component";
import {DatePipe} from "@angular/common";

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
  @Output() complete = new EventEmitter<string>();
  @Output() addTask = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
