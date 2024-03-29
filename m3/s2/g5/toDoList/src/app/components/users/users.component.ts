import { Component } from '@angular/core';
import { iTask } from '../../interfaces/task';
import { iUsers } from '../../interfaces/users';
import { ListService } from '../../Model/list.service';
import { UsersService } from '../../Model/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  task:iTask[]= [];
  users:iUsers[]= [];
  taskByUser:iTask []=[]
  constructor(
    private taskService: ListService, 
    private usersService:UsersService
    ) {}

ngOnInit() {
  this.taskService.getAllTask().subscribe(task => {
    this.task = task;
    
  })
  this.usersService.getAllUsers().subscribe(users => {
    this.users = users;
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

toggleTaskStatus(task: any){
  task.completed = !task.completed;
}

getTasksByUserId(userId: number){
  this.taskService.getTasksByUserId(userId).subscribe(
    data => {
      this.taskByUser = data;
      console.log(this.taskByUser);
      
    }
  );
}


}