import { Injectable } from '@angular/core';
import { iCar } from './Models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  getAllCars():Promise<iCar[]>{

    return fetch('../assets/db.json')
    .then(res => res.json())
    .then((res:iCar[]) => res)
  }

  getCarsById(carModel:string):Promise<iCar | undefined>{
    return this.getAllCars()
    .then(res => res.find(p => p.model === carModel))
  }

  getBrandCars(homeBrand:string):Promise<iCar[]>{
    return this.getAllCars()
    .then(res => res.filter(p => p.brand == homeBrand))
  }


}
