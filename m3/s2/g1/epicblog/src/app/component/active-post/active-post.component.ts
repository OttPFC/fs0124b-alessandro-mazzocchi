import { Component } from '@angular/core';
import { iPost } from '../Model/post';
import { Router } from '@angular/router';
import { PostServiceService } from '../../post-service.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss'
})
export class ActivePostComponent {
  
  db:iPost[] = [];
  
  constructor(private router: Router,private newDb:PostServiceService) {}
  

  ngOnInit() {
    this.getUnshuffleDb();
    this.db.filter((art: { active: boolean; }) => art.active)
  
    }

    getUnshuffleDb() {
      this.db = this.newDb.getDb()
        console.log(this.db)
    }
  goToPostDetails(id: number) {
    this.db = this.newDb.getDb()
    this.router.navigate(['/post-details', id]);
  }
}
