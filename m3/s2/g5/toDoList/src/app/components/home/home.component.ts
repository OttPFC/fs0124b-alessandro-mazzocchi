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
  search: string = '';
  filteredTasks: any[] = [];

  constructor(
    private taskService: ListService, 
    private usersService:UsersService
    ) {}

ngOnInit() {
  this.taskService.$task.subscribe(task => {
    this.task = task;
    this.filteredTasks = [...this.task];
  })
  this.usersService.$users.subscribe(users => {
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
taskStatus(task: any){
  this.usersService.taskStatus(task);
}
searchTasks(){
  this.filteredTasks = this.task.filter(t => {
    const user = this.users.find(u => u.id === t.userId);
    return user && `${user.firstName} ${user.lastName}`.toLowerCase().includes(this.search.toLowerCase());
  });
}

}



