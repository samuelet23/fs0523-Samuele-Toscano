import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { environment } from '../environments/environment.development';
import { Isearch } from './Modules/isearch';
import { IProduct } from './Modules/i-product';
import { IForecast } from './Modules/i-forecast';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {


  constructor(private http:HttpClient) { }



getCityMeteo(lat:number, lon:number):Observable<IProduct>{
  const apiProd = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=it&appid=${environment.apiKey}`;
       return  this.http.get<IProduct>(apiProd)
}

  getLocalName(query: string): Observable<string[]> {
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&lang=it&appid=${environment.apiKey}`;
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
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&lang=it&appid=${environment.apiKey}`;
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
const apiUrl= `https://api.openweathermap.org/data/2.5/weather?id=${id}&lang=it&appid=${environment.apiKey}`
return this.http.get<IProduct>(apiUrl)
}

getById5Days(id:number):Observable<IForecast>{
  const apiUrl = `api.openweathermap.org/data/2.5/forecast?id=${id}&lang=it&appid=${environment.apiKey}`
  return this.http.get<IForecast>(apiUrl)
}


addFavourtie(obj: IProduct): Observable<IProduct> {
  console.log('Dati inviati:', obj);
  return this.http.post<IProduct>(environment.prefeUrl, obj);
}

getFavourite():Observable<IProduct[]>{
  return this.http.get<IProduct[]>(environment.prefeUrl)
}
deleteFavourite(id:number):Observable<IProduct>{
  return this.http.delete<IProduct>(`${environment.prefeUrl}/${id}` )
}
}
