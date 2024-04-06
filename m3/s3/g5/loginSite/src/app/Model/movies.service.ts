import { Injectable } from '@angular/core';
import { iMovies } from '../interfaces/movies';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(private http:HttpClient) { }

private mov = new Subject<iMovies[]>()
movies$ = this.mov.asObservable()

getAllMovies(){
  return this.http.get<iMovies[]>(environment.moviesUrl)
  .subscribe(movies => this.mov.next(movies))
  
}

}
