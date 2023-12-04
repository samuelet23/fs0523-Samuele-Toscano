import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProduct } from './iproduct';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl:string = 'https://dummyjson.com/products'
  preferiti: iProduct[] = [];
  carrello: iProduct[]= []

  subject:Subject<iProduct[]> = new Subject()
  preferiti$ = this.subject.asObservable();


  constructor(private http: HttpClient) { }


  aggiornaSubject() {
    this.subject.next(this.preferiti);
  }
  salva(nuovoProdotto: iProduct) {
    this.preferiti.push(nuovoProdotto);
    this.aggiornaSubject();
    console.log(this.preferiti);

  }
  aggiungi(nuovoProdotto: iProduct) {
    this.carrello.push(nuovoProdotto);
    this.aggiornaSubject();
    console.log(this.carrello);

  }

  getAll():Observable<iProduct[]>{
    return this.http.get<iProduct[]>(this.apiUrl)
  }
}
