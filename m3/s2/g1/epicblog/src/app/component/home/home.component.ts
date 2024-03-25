import { Component, OnInit } from '@angular/core';
import { iPost } from '../Model/post';
import { PostServiceService } from '../../post-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  db:iPost[] = [];
  dbShuffle:iPost[] = [];
  constructor(private newDb:PostServiceService) {}
  ngOnInit(): void {

    

      this.getUnshuffleDb()
      this.getShuffleDb()
  }

  getUnshuffleDb() {
    this.db = this.newDb.getDb()
      console.log(this.db)
  }

  getShuffleDb() {
    this.dbShuffle = this.newDb.getDb()
    this.shuffle(this.dbShuffle)
      console.log(this.dbShuffle)
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



