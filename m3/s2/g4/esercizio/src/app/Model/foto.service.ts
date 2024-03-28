import { Injectable } from '@angular/core';
import { iPhotos } from '../interfaces/photos';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  private apiUrl:string = "https://jsonplaceholder.typicode.com/photos"
  photos:iPhotos[] = [];
  photoSubject = new BehaviorSubject<iPhotos[]>([]);
  $photo = this.photoSubject.asObservable();

  favourites:iPhotos[] = [];
  favSubject = new Subject<iPhotos>();
  
  $favourites = this.favSubject.asObservable().pipe(tap(p => {
    this.favourites.push(p)
  }))


  constructor(private http:HttpClient) {
    this.getAllPhotos().subscribe(data => {
      this.photoSubject.next(data);
      this.photos = data;      
    })
  }

  getAllPhotos(){
    return this.http.get<iPhotos[]>(this.apiUrl);
  }

  deletePhoto(id:number){
    return this.http.delete<iPhotos>(`${this.apiUrl}/${id}`)
    .pipe(tap(()=> {
      this.photos = this.photos.filter(photo => photo.id!== id)
      this.photoSubject.next(this.photos);
    }))
  }

  addToFavourites(product:iPhotos){
    this.favSubject.next(product)
  }
}
