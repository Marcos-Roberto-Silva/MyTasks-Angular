import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CardComponent} from "../../shared/card/card.component";

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
  imports: [
    CardComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();
  @Output() addTask = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
