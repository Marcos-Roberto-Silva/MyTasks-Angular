import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {NgForOf, NgIf} from "@angular/common";
import {TasksComponent} from "./tasks/tasks.component";
import {NewTaskComponent} from "./tasks/new-task/new-task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, NgForOf, TasksComponent, NgIf, NewTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedUserId?: string;
  users = DUMMY_USERS;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onSelectUser(id: any): void {
    this.selectedUserId = id;
  }
}
