import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {TasksService} from "./tasks.service";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TaskComponent} from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgIf, NewTaskComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  newTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUseTask() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onClose() {
    this.newTask = false;
  }

  onAddTask() {
    this.newTask = true;
  }

  onCompleteTask(taskId: string) {
    this.tasksService.removeTask(taskId);
  }
}
