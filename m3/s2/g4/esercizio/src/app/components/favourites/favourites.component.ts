import { Component, OnInit } from '@angular/core';
import { iPhotos } from '../../interfaces/photos';
import { FotoService } from '../../Model/foto.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  photos: iPhotos[] = [];

  constructor(private photoSvr: FotoService) {}

  ngOnInit(){
    this.likeAtThis();
  }

  likeAtThis(){
    this.photoSvr.$favourites.subscribe(photos => {
        this.photos = photos;  
        console.log(this.photos);
        console.log('Mi Piace'); 
      }
    );
  }

  
}
