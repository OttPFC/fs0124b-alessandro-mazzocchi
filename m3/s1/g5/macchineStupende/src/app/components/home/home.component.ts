import { Component } from '@angular/core';
import { iCar } from '../../Models/car';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  cars:iCar[] = [];
  logo: string[] = [];

constructor(private allCars:CarService){}

ngOnInit(){

  this.allCars.getAllCars().then(res => {
    this.cars = this.shuffle(res)
  
    console.log(this.cars)
  
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