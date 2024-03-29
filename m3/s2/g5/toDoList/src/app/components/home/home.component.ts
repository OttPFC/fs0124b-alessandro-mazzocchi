import { Component } from '@angular/core';
import { ListService } from '../../Model/list.service';
import { iTask } from '../../interfaces/task';
import { iUsers } from '../../interfaces/users';
import { UsersService } from '../../Model/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  task:iTask[]= [];
  users:iUsers[]= [];

  constructor(
    private taskService: ListService, 
    private usersService:UsersService
    ) {}

ngOnInit() {
  this.taskService.getAllTask().subscribe(task => {
    this.task = task;
    console.log(this.task);
    
  })
  this.usersService.getAllUsers().subscribe(users => {
    this.users = users;
    console.log(this.users);
    
  })

}

getUserImage(userId: number): string {
  const user = this.users.find(u => u.id === userId);
  return user ? user.image : '';
}

getUserName(userId: number): string {
  const user = this.users.find(u => u.id === userId);
  return user ? `${user.firstName} ${user.lastName}` : '';
}

getUserTitle(userId: number): string {
  const user = this.users.find(u => u.id === userId);
  return user ? `${user.title}` : '';
}
toggleTaskStatus(task: any): void {
  task.completed = !task.completed;
}

}



