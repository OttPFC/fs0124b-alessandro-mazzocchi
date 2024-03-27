import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceProductsService } from '../../services/service-products.service';
import { iProducts } from '../../interfaces/products';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class HomeComponent implements OnInit {

  prod:iProducts[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: ServiceProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      const productId = params.id;
      console.log(productId);
      
      this.service.getProductById(productId).subscribe(res => {
        if (res) {
          this.prod = [res['products'][0]];
          console.log(this.prod);
        } 
      });
    });
  }
}
