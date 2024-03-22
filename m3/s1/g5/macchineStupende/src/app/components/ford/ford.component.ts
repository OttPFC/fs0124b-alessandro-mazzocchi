import { Component } from '@angular/core';
import { iCar } from '../../Models/car';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {

  cars:iCar[] = [];

  constructor(private allCars:CarService){}
  
  ngOnInit(){
  
    this.allCars.getBrandCars('Ford').then(res => {
      this.cars = res
    
      console.log(this.cars)
    
    });
  
  }
}
