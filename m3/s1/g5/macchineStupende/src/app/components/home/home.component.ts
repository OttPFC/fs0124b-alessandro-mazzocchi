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

constructor(private allCars:CarService){}

ngOnInit(){

  this.allCars.getAllCars().then(res => {
    this.cars = res
  
    console.log(this.cars)
  
  });

}
}
