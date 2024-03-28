import { Component } from '@angular/core';
import { iPhotos } from '../../interfaces/photos';
import { FotoService } from '../../Model/foto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  photos:iPhotos[] = [];
  constructor(private photoSvr:FotoService) {}


  ngOnInit() {
    this.photoSvr.$photo.subscribe(photos => {
      this.photos = photos;
      console.log(this.photos);
    });
  }

  deletePhoto(id:number) {
    this.photoSvr.deletePhoto(id).subscribe();
  }

  addFavourites(product:iPhotos) {
    this.photoSvr.addToFavourites(product)
  }



}
