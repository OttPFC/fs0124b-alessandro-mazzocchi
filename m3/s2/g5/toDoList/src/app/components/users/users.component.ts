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
  
  taskByUser:iTask []=[]

  constructor(
    private taskService: ListService, 
    private usersService:UsersService
    ) {}

ngOnInit() {
  this.taskService.$task.subscribe(task => {
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

taskStatus(task: any){
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