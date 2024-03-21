import { Component } from '@angular/core';
import { iPost } from '../Model/post';
import { Router } from '@angular/router';



@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss'
})
export class InactivePostComponent {

  postArticles2: iPost[] = [];
  postArticles: iPost[] = [];
  constructor(private router: Router) {}



  ngOnInit() {

    fetch('../assets/db.json')
      .then(art => art.json())
      .then(data => {
        this.postArticles2 = data.posts.filter((art: { active: boolean; }) => !art.active)
      })
  
    }
  goToPostDetails(id: number) {
    fetch('../assets/db.json')
      .then(art => art.json())
      .then(data => this.postArticles = data.posts);
    this.router.navigate(['/post-details', id]);
  }

}