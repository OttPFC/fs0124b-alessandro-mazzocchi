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
  getAvailableCars():Promise<iCar[]>{
    return this.getAllCars()
    .then(res => res.filter(p => p.available))
  }

  getUnvailableCars():Promise<iCar[]>{
    return this.getAllCars()
    .then(res => res.filter(p => !p.available))
  }

  getCarsById(model:string):Promise<iCar | undefined>{
    return this.getAllCars()
    .then(res => res.find(p => p.model == model))
  }

  getBrandCars(homeBrand:string):Promise<iCar[]>{
    return this.getAllCars()
    .then(res => res.filter(p => p.brand == homeBrand))
  }


}
