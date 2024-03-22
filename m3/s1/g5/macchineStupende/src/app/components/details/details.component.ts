import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iCar } from '../../Models/car';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  cars: iCar[] = [];
  autoPlayAudio = true;
  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      const carModel = params.model;
      this.carService.getCarsById(carModel).then(res => {
        if (res) {
          this.cars = [res];
          console.log(this.cars);
        } else {
          console.log('Auto non trovata');
        }
      });
    });
  }
}
