import { Component } from '@angular/core';
import { iPost } from '../Model/post';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss'
})
export class ActivePostComponent {
  postArticles2: iPost[] = [];
  ngOnInit() {

    fetch('../assets/db.json')
      .then(art => art.json())
      .then(data => {
        this.postArticles2 = data.posts.filter((art: { active: boolean; }) => art.active)
      })
  }
}
