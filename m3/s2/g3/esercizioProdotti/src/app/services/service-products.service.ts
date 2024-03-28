import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProducts, iRoot } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductsService {

  private apiUrl:string = 'https://dummyjson.com/products'

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<{products: iProducts[]}>(this.apiUrl)
  }

  getProductById(id:number){
    return this.http.get<iProducts>(`${this.apiUrl}/${id}`)
  }
  
  createProduct(product:iProducts){
    return this.http.post<iProducts>(this.apiUrl,product)
  }
  
  editProduct(product:iProducts){
    return this.http.put<iProducts>(`${this.apiUrl}/${product.id}`,product)
  }
  
  deleteProduct(id:number){
    return this.http.delete<iProducts>(`${this.apiUrl}/${id}`)
  }

  



}
