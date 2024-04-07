import { Component } from '@angular/core';
import { iMovies } from '../../interfaces/movies';
import { MoviesService } from '../../Model/movies.service';

@Component({
  selector: 'app-new-film',
  templateUrl: './new-film.component.html',
  styleUrl: './new-film.component.scss'
})
export class NewFilmComponent {
  movies: iMovies[] = [];
  newMovie: iMovies = {
    id: 0,
    title: '',
    description: '',
    image: '',
    duration: '',
    rating: 0
  };

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.moviesService.getAllMovies();
    this.moviesService.movies$.subscribe(movies => {
      this.movies = movies;
    });
  }

  addMovie() {
    this.moviesService.addMovie(this.newMovie);
    this.newMovie = {
      id: 0,
      title: '',
      description: '',
      image: '',
      duration: '',
      rating: 0
    };
  }

  deleteMovie(id: number) {
    this.moviesService.deleteMovie(id);
  }
}
