import { Component } from '@angular/core';
import { iCar } from '../../Models/car';
import { CarService } from '../../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  cars:iCar[] = [];

  constructor(private allCars:CarService,private router: Router){}
  
  ngOnInit(){
  
    this.allCars.getAllCars().then(res => {
      this.cars = res
    
      console.log(this.cars)
    
    });
  
  }
  isHomePage(): boolean {
    return this.router.url === '/';
  }
}
