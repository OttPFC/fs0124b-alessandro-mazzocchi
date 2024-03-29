import { Component } from '@angular/core';
import { iTask } from '../../interfaces/task';
import { iUsers } from '../../interfaces/users';
import { ListService } from '../../Model/list.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  task:iTask[]= [];
  users:iUsers[]= [];

  constructor(private taskService: ListService) { }

ngOnInit() {
  this.taskService.getAllTask().subscribe(task => {
    this.task = task;
    console.log(this.task);
    
  })
}
}
