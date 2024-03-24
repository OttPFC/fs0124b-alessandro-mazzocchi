import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iCar } from '../../Models/car';
import { CarService } from '../../car.service';
import { iDes } from '../../Models/des';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  cars: iCar[] = [];
  des: iDes [] = [];
  autoPlayAudio = true;
  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      const carModel = params.model;
      this.carService.getCarsById(carModel).then(res => {
        if (res) {
          this.cars = [res];
          console.log(this.cars);
        } 
      });
    });

    this.carService.getAllDes().then(res => {
      this.des = this.shuffle(res)
    
      console.log(this.des)
    
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
