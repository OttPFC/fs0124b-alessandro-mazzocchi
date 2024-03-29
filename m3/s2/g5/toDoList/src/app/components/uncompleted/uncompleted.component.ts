import { Component } from '@angular/core';
import { iTask } from '../../interfaces/task';
import { iUsers } from '../../interfaces/users';
import { ListService } from '../../Model/list.service';
import { UsersService } from '../../Model/users.service';

@Component({
  selector: 'app-uncompleted',
  templateUrl: './uncompleted.component.html',
  styleUrl: './uncompleted.component.scss'
})
export class UncompletedComponent {
  
  task:iTask[]= [];
  users:iUsers[]= [];

  constructor(
    private taskService: ListService, 
    private usersService:UsersService
    ) {}

ngOnInit() {

  this.completedTask()
  this.allUsers()

}

allTask(){
  this.taskService.getAllTask().subscribe(task => {
    this.task = task;
  })
}

allUsers(){
  this.usersService.getAllUsers().subscribe(users => {
    this.users = users;
    console.log(this.users);
  })
}

completedTask(){
  this.taskService.getUncompletedTask().subscribe(task => {
    this.task = task;
  })
}

getUserImage(userId: number): string {
  return this.usersService.getUserImage(userId);
}

getUserName(userId: number): string {
  return this.usersService.getUserName(userId);
}

getUserTitle(userId: number): string {
  return this.usersService.getUserTitle(userId);
}

}
