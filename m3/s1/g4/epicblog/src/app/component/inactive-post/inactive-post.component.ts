import { Component } from '@angular/core';
import { iPost } from '../Model/post';
import { PostServiceService } from '../../post-service.service';


@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss'
})
export class InactivePostComponent {

  postArticles2: iPost[] = [];



  ngOnInit() {

    fetch('../assets/db.json')
      .then(art => art.json())
      .then(data => {
        this.postArticles2 = data.posts.filter((art: { active: boolean; }) => !art.active)
      })
  }
}