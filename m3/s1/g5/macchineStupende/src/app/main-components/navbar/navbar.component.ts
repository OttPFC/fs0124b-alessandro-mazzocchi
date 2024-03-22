import { Component } from '@angular/core';
import { iCar } from '../../Models/car';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  cars:iCar[] = [];

  constructor(private allCars:CarService){}
  
  ngOnInit(){
  
    this.allCars.getAllCars().then(res => {
      this.cars = res
    
      console.log(this.cars)
    
    });
  
  }
}
