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
  likePhotos: iPhotos[] = [];
  constructor(private photoSvr:FotoService) {}


  ngOnInit() {
    this.photoSvr.$photo.subscribe(photos => {
      this.photos = photos;
      console.log(this.photos);
    });
    this.likeAtThis()
  }

  deletePhoto(id:number) {
    this.photoSvr.deletePhoto(id).subscribe();
    
  }

  addFavourites(product:iPhotos) {
    this.photoSvr.addToFavourites(product)
    
  }

  likeAtThis(){
    this.photoSvr.$favourites.subscribe(photos => {
        this.likePhotos = photos;  
        console.log(this.likePhotos);
        console.log('Mi Piace'); 
        
      }
    );
  }

}
