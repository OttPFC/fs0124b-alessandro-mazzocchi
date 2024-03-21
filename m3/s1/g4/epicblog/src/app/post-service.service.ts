import { Injectable } from '@angular/core';
import { iPost } from './component/Model/post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

    async getAllArticles(): Promise<iPost[]> {
      console.log('inside getAllArticles');
        const art = await fetch('../assets/db.json');
      const art_1 = await art.json();
      return art_1;
            
    }

    async getActiveArticles(): Promise<iPost[]> {
        const art = await this.getAllArticles();
      return art.filter(post => post.active);
    }

    async getInactiveArticles(): Promise<iPost[]> {
        const art = await this.getAllArticles();
      return art.filter(post => !post.active);
    }

}