import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { environment } from '../environments/environment.development';
import { Isearch } from './Modules/isearch';
import { IProduct } from './Modules/i-product';
import { IaccessToken } from './Modules/iaccess-token';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {


  constructor(private http:HttpClient) { }



  getLocalName(query: string): Observable<string[]> {
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${environment.apiKey}`;
    return this.http.get<Isearch[]>(apiUrl).pipe(
      switchMap((response) => {
        return of(
          response.map((item) => {
            return item.local_names?.it || item.name;
          })
        );
      })
    );
  }


  getLatLon(query: string): Observable<{ lat: number; lon: number }[]> {
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${environment.apiKey}`;
    return this.http.get<Isearch[]>(apiUrl).pipe(
      switchMap((response) => {
        return of(
          response.map((item) => {
            return { lat: item.lat, lon: item.lon };
          })
        );
      })
    );
  }

getById(id:number):Observable<IProduct>{
const apiUrl= `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${environment.apiKey}`
return this.http.get<IProduct>(apiUrl)
}

}
