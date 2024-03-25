import { Component } from '@angular/core';
import { iPost } from '../Model/post';
import { Router } from '@angular/router';
import { PostServiceService } from '../../post-service.service';



@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss'
})
export class InactivePostComponent {

  
  
  db:iPost[] = [];
  dbShuffle:iPost[] = [];
  constructor(private router: Router,private newDb:PostServiceService) {}
  

  ngOnInit() {
    this.getUnshuffleDb()
    
  
    }

    getUnshuffleDb() {
      this.db = this.newDb.getDb()
      this.db.filter((art: { active: boolean; }) => !art.active)
      return this.db;
    }
  goToPostDetails(id: number) {
    this.db = this.newDb.getDb()
    this.router.navigate(['/post-details', id]);
  }

}