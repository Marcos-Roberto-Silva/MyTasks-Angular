import { Injectable } from "@angular/core";
import { NewTask } from "../interfaces/new-task.interface";

@Injectable({ providedIn: 'root' })
export class TasksService {

  private tasks = [
    {
      id: 't1',
      title: 'Design Homepage Layout',
      summary: 'Create a responsive homepage layout using Figma based on the new brand guidelines.',
      userId: 'u1',
      dueDate: '2025-10-25',
    },
    {
      id: 't2',
      title: 'Implement Authentication',
      summary: 'Develop login, registration, and password reset features using JWT and bcrypt.',
      userId: 'u4',
      dueDate: '2025-10-23',
    },
    {
      id: 't3',
      title: 'Write Unit Tests for API',
      summary: 'Create Jest unit tests for all user-related API endpoints in the backend.',
      userId: 'u6',
      dueDate: '2025-10-28',
    },
    {
      id: 't4',
      title: 'Optimize Database Queries',
      summary: 'Review and optimize slow SQL queries identified in the production logs.',
      userId: 'u3',
      dueDate: '2025-10-27',
    },
    {
      id: 't5',
      title: 'Deploy to Staging',
      summary: 'Set up CI/CD pipeline to automatically deploy the latest version to the staging environment.',
      userId: 'u4',
      dueDate: '2025-10-22',
    },
    {
      id: 't6',
      title: 'Conduct User Interviews',
      summary: 'Schedule and conduct interviews with five users to gather feedback on the onboarding flow.',
      userId: 'u2',
      dueDate: '2025-10-24',
    },
    {
      id: 't7',
      title: 'Fix Mobile Navigation Bug',
      summary: 'Resolve issue where the mobile menu does not open on certain screen sizes.',
      userId: 'u5',
      dueDate: '2025-10-21',
    },
    {
      id: 't8',
      title: 'Update Documentation',
      summary: 'Revise and update the project README and internal docs to reflect recent API changes.',
      userId: 'u6',
      dueDate: '2025-10-26',
    },
  ];

  constructor( ) {
    const localStorageTasks = localStorage.getItem('tasks');

    if (localStorageTasks) {
      this.tasks = JSON.parse(localStorageTasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTask();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTask()
  }

  private saveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
