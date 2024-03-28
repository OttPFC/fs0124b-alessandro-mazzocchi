import { Component } from '@angular/core';
import { iPhotos } from '../../interfaces/photos';
import { FotoService } from '../../Model/foto.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.scss'
})
export class FavouritesComponent {

  photos:iPhotos[] = []

  constructor(private photoSvr:FotoService) {}

  ngOnInit() {
    this.likeAtThis()
  }


  likeAtThis(){
    this.photoSvr.$favourites.subscribe(photos => {
      this.photos.push(photos)
      console.log('MI piace');
    });
  }

}
