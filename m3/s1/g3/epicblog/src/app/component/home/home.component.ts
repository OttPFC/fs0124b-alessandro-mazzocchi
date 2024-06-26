import { Component, OnInit } from '@angular/core';
import { iPost } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  postArticle:iPost[] = [];
  postArticle2:iPost[] = [];

  ngOnInit(): void {

    fetch('../assets/db.json')
      .then(art => art.json())
      .then(data => this.postArticle2 = data.posts);

    fetch('../assets/db.json')
      .then(art => art.json())
      .then(data => {
        this.postArticle = data.posts;
        const originalPosts = [...this.postArticle];
        this.postArticle = this.shuffle(originalPosts);
      });
  }

  
  shuffle(array: any[]): any[] {
    let currentIndex = array.length;
    let randomIndex: number;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }
}

