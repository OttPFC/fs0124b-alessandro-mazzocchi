import { Component } from '@angular/core';
import { iProducts, iRoot } from '../../interfaces/products';
import { ServiceProductsService } from '../../services/service-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  root:iRoot []= []
  prod:iProducts[] = []
  
  constructor(private service:ServiceProductsService){} 
  

  ngOnInit() {
    this.service.getAllProducts().subscribe(res=>{
      this.prod = res.products
      console.log(this.root);
    })
  }

}
