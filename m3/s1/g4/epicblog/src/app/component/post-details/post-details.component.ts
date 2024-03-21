import { Component } from '@angular/core';
import { iPost } from '../Model/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent {

  postArticles2: iPost[] = [];

  ngOnInit() {

    fetch('../assets/db.json')
      .then(art => art.json())
      .then(data => {
        this.postArticles2 = data.posts.filter((art => art.id))
      })
  }
}
