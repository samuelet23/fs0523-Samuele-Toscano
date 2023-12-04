import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProduct } from './iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl:string = 'https://dummyjson.com/products'
  constructor(private http: HttpClient) { }

  getAll():Observable<iProduct[]>{
    return this.http.get<iProduct[]>(this.apiUrl)
  }
}
