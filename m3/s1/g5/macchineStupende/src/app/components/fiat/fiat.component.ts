import { Component } from '@angular/core';
import { iCar } from '../../Models/car';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {
  cars:iCar[] = [];

  constructor(private allCars:CarService){}
  
  ngOnInit(){
  
    this.allCars.getBrandCars('Fiat').then(res => {
      this.cars = res
    
      console.log(this.cars)
    
    });
  
  }
}
