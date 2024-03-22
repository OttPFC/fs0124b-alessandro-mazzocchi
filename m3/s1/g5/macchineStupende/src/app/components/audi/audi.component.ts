import { Component } from '@angular/core';
import { iCar } from '../../Models/car';
import { CarService } from '../../car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {

  cars:iCar[] = [];

  constructor(private allCars:CarService){}
  
  ngOnInit(){
  
    this.allCars.getBrandCars('Audi').then(res => {
      this.cars = res
    
      console.log(this.cars)
    
    });
  
  }




}
